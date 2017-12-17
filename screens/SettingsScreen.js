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
                <Button 
                    title="Reset Liked Jobs"
                    backgroundColor='#0288D1'
                    large
                    icon={{ name: 'delete-forever' }}
                    containerViewStyle={[styles.buttonContainer, {top: 20}]}
                    onPress={this.props.clearLikedJobs} 
                />
                <Button 
                    title="Logout"
                    backgroundColor='#0288D1'
                    large
                    icon={{ name: 'logout', type: 'material-community' }}
                    containerViewStyle={[styles.buttonContainer, {top: 120}]}
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
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        left: 10,
        right: 10
    }
  });

