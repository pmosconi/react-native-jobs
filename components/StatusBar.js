import React from 'react';
import { View, Platform, StatusBar, StyleSheet, Text } from 'react-native'
import { Constants } from 'expo'

const MyStatusBar = () => {
    return (
      <View style={{ backgroundColor: 'steelblue', height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor="steelblue" />
      </View>
    )
  }

export default MyStatusBar;