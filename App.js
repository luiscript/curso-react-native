import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.red}>Rojo</Text>
      <Text style={styles.bigBlue}>Azul grande</Text>
      <Text style={[styles.bigBlue, styles.red]}>Azul grande luego rojo</Text>
      <Text style={[styles.red, styles.bigBlue]}>Rojo luego azul grande</Text>
    </View>
  );
}