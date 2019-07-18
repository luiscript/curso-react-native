import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';

export default class ListItem extends React.Component{
  render(){
    return(
      <View style={{backgroundColor: '#fff', width: 200, height: 100,
      flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.item}> Hola {this.props.item.key}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


module.export = ListItem;