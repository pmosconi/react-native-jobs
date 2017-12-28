import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './store';
import MainNavigator from './navigation';
import MyStatusBar from './components/StatusBar';

export default class App extends React.Component {

  render() {
    const { persistor, store } = configureStore();
    return (
      <Provider store={store} >
        <PersistGate persistor={persistor}>
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
