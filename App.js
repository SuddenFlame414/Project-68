import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createBottomNavigator} from 'react-navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
var AppNavigator = createBottomNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
