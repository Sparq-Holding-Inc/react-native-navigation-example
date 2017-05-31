import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdScreen'

const AppNavigation = StackNavigator({
  First: {
    screen: FirstScreen,
    navigationOptions: {
      title: 'First Screen',
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      title: 'Second Screen',
    }
  },
  Third: {
    screen: ThirdScreen,
    navigationOptions: {
      title: 'Third Screen'
    }
  }
})

export default AppNavigation
