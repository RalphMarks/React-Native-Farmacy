import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Menu extends React.Component {
  render () {
    return(
      <View>
        <Button title='Crear Pill' onPress={() => this.props.navigation.navigate('PillForm')} />
        <Button title='Ver Pills' onPress={() => this.props.navigation.navigate('PillList')} />
        <Button title='Ver Farmacias'/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})