import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainNavigator = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: TabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckScreen },
        review: {
          screen: StackNavigator({
            review: { screen: ReviewScreen },
            settings: { screen: SettingsScreen }
          })
        }
      }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false
        //lazy: true
      })
    }
  }, {
    //tabBarPosition: 'bottom',
    navigationOptions: { tabBarVisible: false },
    swipeEnabled: false,
    lazy: true,
    animationEnabled: false,
    initialRouteName: 'welcome',
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

  export default MainNavigator;
  