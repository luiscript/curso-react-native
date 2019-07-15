import React from 'react';
import Simple from './src/SimpleComponent';
import { Image, View } from 'react-native';

export default function App() {
  var pic = {
    uri: 'https://ouseful.files.wordpress.com/2012/07/proglanginfluence.png'
  };
  return (
    <View style={{flex: 1, alignItems: 'center', top: 50}}>
      <Image source={pic} style={{width: 422, height: 315}}/>
      <Simple text="Hola React Native!" />
    </View>
    
  );
}