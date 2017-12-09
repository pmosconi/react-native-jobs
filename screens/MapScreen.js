import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {
    state = { 
        mapLoaded: false,
        region: {
            latitude: 37,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
        }
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    onPressJobs = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    }

    render() {
        if (!this.state.mapLoaded) {
            return(
                <View style={styles.loadView} >
                    <ActivityIndicator size="large" />
                </View>
            );
        }

        return (
            <View style={styles.mapView} >
                <MapView
                    region={this.state.region}
                    style={styles.map}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <Button 
                    title="Jobs Around Here" 
                    large
                    buttonStyle={styles.button}
                    containerViewStyle={styles.buttonContainer}
                    icon={{ name: 'search' }}
                    onPress={this.onPressJobs} 
                />
            </View>
        );
    }
}

export default connect(null, actions)(MapScreen);

const styles = StyleSheet.create({
    mapView: {
        flex: 1
    },
    map: {
        flex: 1
    },
    loadView: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#0288D1'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10
    }
  });
