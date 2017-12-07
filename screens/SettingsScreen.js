import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';
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
            <View style={styles.view} >
                <Text>SettingsScreen</Text>
                <Button 
                    title="Logout" 
                    raised
                    buttonStyle={styles.button}
                    containerViewStyle={styles.buttonContainer}
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

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0288D1'
    },
    buttonContainer: {
        marginTop: 15
    }
  });

