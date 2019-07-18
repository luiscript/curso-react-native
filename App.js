import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer  } from "react-navigation";
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',
          {
            id: 86,
            name: 'Producto 86',
          })} />
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    const name = navigation.getParam("name", "");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>id: {id} - {name}</Text>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  { Home: HomeScreen, Details: DetailsScreen },
  { initialRouteName: "Home" }
);
export default createAppContainer(AppNavigator);