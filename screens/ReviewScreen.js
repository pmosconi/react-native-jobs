import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'react-navigation';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight:  (
            <Button 
                title="Settings" 
                backgroundColor = "#fff"
                color = "steelblue"
                onPress={() => navigation.navigate('settings')} 
            />
        )
    });

    state = {  }
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;