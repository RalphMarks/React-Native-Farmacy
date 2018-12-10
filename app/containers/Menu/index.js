import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';


const styles = StyleSheet.create({
  view: {
    marginLeft: 24, 
    marginRight: 24, 
    marginTop: 16,
  },
});
export default class Menu extends React.Component {

  static navigationOptions = {
    title: 'PILLS',
    headerTitleStyle: {
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  };


  render () {
    return(
      <View>
        <View style={styles.view}>
        <Button title='Crear Pill' onPress={() => this.props.navigation.navigate('PillForm')} />
        </View>
        
        <View style={styles.view}>
        <Button title='Ver Pills' onPress={() => this.props.navigation.navigate('PillList')} />
        </View>

        <View style={styles.view}>
        <Button title='Calendario' onPress={() => this.props.navigation.navigate('Appointments')} />
        </View>

        <View style={styles.view}>
          <Button title='Ver Farmacias'/>
        </View>
      </View>
    );
  }
}
