/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class FirstScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Native Navigation Example!</Text>
        <Button onPress={() => navigate('Second', {from: 'first'})} title="Go to second screen"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  container: {
    alignItems: 'center',
    paddingTop: 50
  }
});
