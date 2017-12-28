import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Notifications } from 'expo';

import configureStore from './store';
import MainNavigator from './navigation';
import registerForNotifications from './services/push_notifications';
import MyStatusBar from './components/StatusBar';
import Loading from './components/Loading';

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener(notification => {
      const { data: { text }, origin } = notification;
      if(origin === 'received' && text)
        Alert.alert(
          'New Push Notification',
          text,
          [{text: 'Ok'}]
        );
    });
  }

  render() {
    const { persistor, store } = configureStore();
    return (
      <Provider store={store} >
        <PersistGate 
          loading={<Loading/>}
          persistor={persistor}>
          <View style={styles.container}>
            <MyStatusBar/>
            <MainNavigator/>
          </View>
          </PersistGate>
      </Provider>
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
