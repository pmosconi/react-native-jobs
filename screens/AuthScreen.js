import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class AuthScreen extends Component {
    static navigationOptions = { tabBarLabel: 'login'};

    onAuthComplete = props => {
        if(props.token) {
            this.props.navigation.navigate('map');
        } 
    }

    onPressLogin = () => {
        this.setState({ cancLogin: false });
        this.props.facebook_login();
    }

    componentDidMount() {
        this.props.facebook_login();
        this.onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    render() {
        return (
            <View style={styles.view} >
            <Text>Please Login to continue...</Text>
            <Button 
                title="Login" 
                raised
                buttonStyle={styles.button}
                containerViewStyle={styles.buttonContainer}
                onPress={this.onPressLogin} 
            />
        </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { token: auth.token };
};

export default connect(mapStateToProps, actions)(AuthScreen);

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
