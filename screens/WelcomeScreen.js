import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#1E88E5' },
    { text: 'Use this to get a job', color: '#1976D2' },
    { text: 'Set your location then swipe away', color: '#1565C0' }
];

class WelcomeScreen extends Component {
    static navigationOptions = { tabBarLabel: 'welcome'};

    onSlidesComplete = () => this.props.navigation.navigate('auth');


    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;