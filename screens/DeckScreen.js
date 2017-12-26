import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Swipe from '../components/Swipe';
import { cutText } from '../utils';
import * as actions from '../actions';

class DeckScreen extends Component {
    static navigationOptions =  {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => { return <Icon name="description" size={30} color={tintColor} />; },
    };

    renderCard = job => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return(
            <Card
              key={job.jobkey}
              title={cutText(job.jobtitle, 40)}
            >
                <View style={styles.mapWrapper} >
                    <MapView
                        scrollEnabled={false}
                        style={styles.map}
                        cacheEnabled={Platform.OS === 'android'}
                        initialRegion={initialRegion}
                    />
                </View>
                <View style={styles.detailWrapper} >
                    <Text>{cutText(job.company, 30)}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <View style={styles.snipStyle} >
                    <Text>{cutText(job.snippet.replace(/<\/*b>/g, ''), 135)}</Text>
                </View>
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return(
          <Card title='No More Jobs' >
            <Button 
                title="Back to Map"
                icon={{ name: 'my-location' }}
                backgroundColor='#0288D1'
                onPress={() => this.props.navigation.navigate('map')}
            />
          </Card>
        );
    }

    render() {
        return (
            <View>
                <Swipe 
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={job => this.props.likeJob(job)}
                    keyProp="jobkey"
                />
            </View>
        );
    }
}

const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.results };
};

export default connect(mapStateToProps, actions)(DeckScreen);

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    map: {
        flex: 1
    },
    mapWrapper: {
        height: 270
    },
    snipStyle: {
        height: 52
    }
  });
