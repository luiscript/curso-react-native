import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

const screen2 = props => (
  <View style={{flex:1}}>
    <Text>Value received: {props.navigation.getParam('text', 'Nothing received')}</Text>
    <Button title="Back Screen 1" onPress={() => props.navigation.pop()} />
  </View>
)

screen2.navigationOptions = { title: 'Screen 2'}


export default screen2