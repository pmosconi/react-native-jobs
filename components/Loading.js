import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

const Loading = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0288D1" />
      </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

