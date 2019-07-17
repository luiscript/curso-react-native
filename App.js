import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{height: 40, width: 250, backgroundColor: '#f0f0f0'}}
          placeholder="Escribe aquí para convertir en Pizza!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
