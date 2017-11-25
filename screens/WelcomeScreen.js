import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03a9f4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location then swipe away', color: '#03a9a4' }
];

class WelcomeScreen extends Component {
    static navigationOptions = { tabBarLabel: 'welcome'};
    state = {  }
    render() {
        return (
            <Slides data={SLIDE_DATA} />
        );
    }
}

export default WelcomeScreen;