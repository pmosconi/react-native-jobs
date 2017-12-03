import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#1E88E5' },
    { text: 'Use this to get a job', color: '#1976D2' },
    { text: 'Set your location then swipe away', color: '#1565C0' }
];

class WelcomeScreen extends Component {
    static navigationOptions = { tabBarLabel: 'welcome'};

    componentWillMount() {
        this.props.check_token();
        this.navigateMap(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.navigateMap(nextProps);
    }

    navigateAuth = () => this.props.navigation.navigate('auth');

    navigateMap = ({ token }) => {
        if (token !== null) {
            this.props.navigation.navigate('map');
        }
    }


    render() {
        if (this.props.token === null) {
            return (
                <Slides data={SLIDE_DATA} onComplete={this.navigateAuth} />
            );
        } else {
            return null;
        }

    }
}

const mapStateToProps = ({ auth }) => {
    return { token: auth.token };
};

export default connect(mapStateToProps, actions)(WelcomeScreen);