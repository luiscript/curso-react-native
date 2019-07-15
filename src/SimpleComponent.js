import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Simple extends React.Component{
 render(){
   return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{this.props.text}</Text>
    </View>
   )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontSize: 25,
    color: '#000'
  }
});
