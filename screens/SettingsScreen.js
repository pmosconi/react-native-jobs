import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SettingsScreen extends Component {
    static navigationOptions = () => ({
        title: 'Settings'
    });

    state = {  }
    render() {
        return (
            <View>
                <Text>SettingsScreen</Text>
                <Text>SettingsScreen</Text>
                <Text>SettingsScreen</Text>
                <Button 
                    title="Logout" 
                    backgroundColor = "#fff"
                    color = "steelblue"
                    onPress={() => {
                        this.props.logout();
                        this.props.navigation.navigate('welcome');
                    } } 
                />
            </View>
        );
    }
}

export default connect(null, actions)(SettingsScreen);
