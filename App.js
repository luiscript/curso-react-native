import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}>
      <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
    </View>
  );
}