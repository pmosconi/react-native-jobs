import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MyStatusBar from './components/StatusBar';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen, navigationOptions: { tabBarLabel: 'welcome'} },
      auth: { screen: AuthScreen, navigationOptions: { tabBarLabel: 'auth'} },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen }
        }, {
          lazyLoad: true
        })
      }
    }, {
      swipeEnabled: false,
      lazyLoad: true,
      animationEnabled: false,
      //initialRouteName: welcome,
      tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 100
        },
        style: {
          backgroundColor: 'steelblue',
        },
      }
    });

    return (
      <View style={styles.container}>
        <MyStatusBar/>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
