/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppNavigation from './app/AppNavigation'


export default class NativeNavigationExample extends Component {
  render() {
    return <AppNavigation/>
  }
}


AppRegistry.registerComponent('NativeNavigationExample', () => NativeNavigationExample);
