/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';


export default class FirstTab extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text> This is the first tab!</Text>
          <Button onPress={() => navigate('Second', {from: 'first'})} title="Go to second screen"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  }
});
