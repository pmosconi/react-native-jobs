import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, Platform } from 'react-native';
import { navigation } from 'react-navigation';
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import { cutText } from '../utils';
import * as actions from '../actions';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        tabBarIcon: ({ tintColor }) => { return <Icon name="favorite" size={30} color={tintColor} />; },
        headerRight:  (
            <Button 
                title="Settings" 
                backgroundColor = "#fff"
                color = "steelblue"
                onPress={() => navigation.navigate('settings')} 
            />
        )
    });

    renderLikedJobs = () => {
        return this.props.likedJobs.map(job => {
            const { company, formattedRelativeTime, url, jobkey, longitude, latitude, jobtitle } = job;
            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return(
                <Card 
                key={jobkey}
                title={cutText(jobtitle, 40)} >
                    <View style={styles.cardView} >
                        <MapView
                            scrollEnabled={false}
                            style={styles.map}
                            cacheEnabled={Platform.OS === 'android'}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper} >
                            <Text style={styles.italics} >{cutText(company, 30)}</Text>
                            <Text style={styles.italics} >{formattedRelativeTime}</Text>
                        </View>
                        <Button 
                            title="Apply Now!"
                            backgroundColor='#0288D1'
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    state = {  }
    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ likedJobs }) => {
    return { likedJobs };
};

export default connect(mapStateToProps, actions)(ReviewScreen);

const styles = StyleSheet.create({
    italics: {
        fontStyle: 'italic'
    },
    cardView: {
        height: 200
    },
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
    },
    map: {
        flex: 1
    }
  });