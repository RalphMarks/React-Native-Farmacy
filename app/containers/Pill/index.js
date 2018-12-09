import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements'


export default class Pill extends Component {
 constructor() {
   super();
   this.deletePill = this.deletePill.bind(this);
 }

 successAlert = () => {
    Alert.alert(
      'Pill eliminada'
    )
  }

  errorAlert = () => {
    Alert.alert(
      'Lo sentimos, ocurrio un error'
    )
  }

 deletePill() {
  const { navigation } = this.props;
  const pill = navigation.getParam('pill', "");

  const request = new Request('https://5b1c0310.ngrok.io/farmacy/pill', {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({name: pill.name})
  });
  
    fetch(request)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.status === 'ok') {
        this.successAlert();
        this.props.navigation.navigate('Menu');
      } else {
        this.errorAlert();
      }
    })
    .catch((error) => {
      console.error(error);
    });
 }

 render () {
  const { navigation } = this.props;
  const pill = navigation.getParam('pill', "");

   return(
    <View>
      <Text>Pill</Text>
      <Text> {pill.name} </Text>
      <Text> {pill.illness} </Text>
      <Text> {pill.hours} </Text>
      <Text> {pill.period} </Text>
      <Text> {pill.doctor} </Text>

      <Button
        small raised
        title='Cambiar' onPress={() => this.props.navigation.navigate('PillChangeForm', {
          pill: pill
        })}/>

      <Button
        small raised
        title='Eliminar' onPress={this.deletePill}/>
    </View> 
   );
 }
}