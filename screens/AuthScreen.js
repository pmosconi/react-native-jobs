import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class AuthScreen extends Component {
    static navigationOptions = { tabBarLabel: 'login'};
    state = { cancLogin: false };

    onAuthComplete = props => {
        if(props.token) {
            this.props.navigation.navigate('map');
        } else {
            this.setState({ cancLogin: true });
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
        if (this.state.cancLogin) {
            return (
                <Button 
                    title="Login" 
                    backgroundColor = "#fff"
                    color = "steelblue"
                    onPress={this.onPressLogin} 
                />
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return { token: auth.token };
};

export default connect(mapStateToProps, actions)(AuthScreen);