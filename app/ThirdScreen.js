/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
const octobot = require('./images/full_pulpo.png')

export default class ThirdScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text> This is the third screen!</Text>
        { params.showOctobot && <Image source={octobot}/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
  }
});
