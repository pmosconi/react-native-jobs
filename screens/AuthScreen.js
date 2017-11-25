import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends Component {
    static navigationOptions = { tabBarLabel: 'login'};
    state = {  }
    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}

export default AuthScreen;