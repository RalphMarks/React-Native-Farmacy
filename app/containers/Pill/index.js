import React, { Component } from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'


const styles = StyleSheet.create({
  view: {
    padding: "10px"
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10
  },
  normal: {
    fontSize: 18,
    marginLeft: 15
  },
});

export default class Pill extends Component {

  static navigationOptions = {
    title: 'Detalles',
  };


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

  const request = new Request('https://963d7874.ngrok.io/farmacy/pill', {
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
      <View style={{marginBottom: 32, marginTop: 32}}>
        <Text style={styles.bold}>Nombre:</Text>
        <Text style={styles.normal}> {pill.name} </Text>

        <Text style={styles.bold}>Combate:</Text>
        <Text style={styles.normal}> {pill.illness} </Text>

        <Text style={styles.bold}>Se debe consumir cada:</Text>
        <Text style={styles.normal}> {pill.hours} horas </Text>

        <Text style={styles.bold}>Se debe consumir durante:</Text>
        <Text style={styles.normal}> {pill.period} dias </Text>

        <Text style={styles.bold}>Pill resetada por:</Text>
        <Text style={styles.normal}> {pill.doctor} </Text>
      </View>

      
      <View style={{marginLeft: 24, marginRight: 24, marginTop: 16}}>
        <Button
          small raised
          title='Cambiar' onPress={() => this.props.navigation.navigate('PillChangeForm', {
            pill: pill
          })}/>
      </View>

      <View style={{marginLeft: 24, marginRight: 24, marginTop: 16}}>
        <Button
          small raised
          title='Eliminar' onPress={this.deletePill}/>
      </View>

    </View> 
   );
 }
}