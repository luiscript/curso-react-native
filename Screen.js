import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const screen = props => (
  <View style={{flex: 1, alignItems: 'center'}}>
    <Text>Navigate to another screen but inside same StackNavigation passing text: Hello as param</Text>
    <Button title="Navigate to Screen 2" onPress={() => props.navigation.navigate('screen2', {text: 'Hello'})} />

    <Text style={{marginTop:20}}>Navigate to another screen but in other StackNavigation passing text: Hello as param</Text>
    <Button title="Navigate to Other Screen" onPress={() => props.navigation.navigate('second', {text: 'Hello'})} />
  </View>
)

screen.navigationOptions = { title: 'Screen 1'}

export default screen;