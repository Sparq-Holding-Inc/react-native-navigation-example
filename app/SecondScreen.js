/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Switch
} from 'react-native';

export default class SecondScreen extends Component {
  state = {
    showOctobot: false
  }
  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Show Octobot?</Text>
        <Switch
          tintColor="#d9d9d9"
          value={this.state.showOctobot}
          onValueChange={ (value) => this.setState({showOctobot: value}) }
        />
        <Button
          onPress={() => navigate('Third', {showOctobot: this.state.showOctobot})}
          title="Go to the third screen"
        />
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
