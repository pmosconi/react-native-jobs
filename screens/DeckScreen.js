import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {
    renderCard = job => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        cutText = (text, len) => text.length > len ? text.substr(0, len-3)+'...' : text

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
                    >

                    </MapView>
                </View>
                <View style={styles.detailWrapper} >
                    <Text>{cutText(job.company, 30)}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <View style={styles.snipStyle} >
                    <Text>{cutText(job.snippet.replace(/<\/*b>/g, ''), 135)}</Text>
                </View>
{/*                 <Button 
                    icon={{ name: 'code' }}
                    backgroundColor='#03A9F4'
                    title='View Now!'
                /> */}
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return(
          <Card title='All Done!' >
            <Text style={{ marginBottom: 10 }} >
              No more content to show!
            </Text>
            <Button 
              onPress={this.onRestoreCards}
              icon={{ name: 'code' }}
              backgroundColor='#03A9F4'
              title='Get More!'
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
        height: 300
    },
    snipStyle: {
        height: 52
    }
  });
