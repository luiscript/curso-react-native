import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Screen from './Screen';
import Screen2 from './Screen2';
import OtherScreen from './OtherScreen';

const fisrtScreen = createStackNavigator({
  screen1: Screen,
  screen2: Screen2
});

const secondScreen = createStackNavigator({
  otherScreen: OtherScreen
});

const AppNavigator = createDrawerNavigator({
  first: fisrtScreen,
  second: secondScreen
})

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
});
