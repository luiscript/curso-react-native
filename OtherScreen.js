import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

const otherScreen = props => (
  <View style={{flex:1}}>
    <Text>Value received: {props.navigation.getParam('text', 'Nothing received')}</Text>
    <Button title="Navigate First Screen" onPress={() => props.navigation.navigate('first')} />
  </View>
)

otherScreen.navigationOptions = {
  title: "Other Screen"
}

export default otherScreen