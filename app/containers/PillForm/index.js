// Formik x React Native example
import React from 'react';
import { Alert, Button, Text, TextInput, View, Picker, StyleSheet } from 'react-native';
import { Formik, setFieldValue } from 'formik';


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
export default class PillForm extends React.Component {


  static navigationOptions = {
    title: 'Crear Pill',
  };

  constructor(props) {
    super(props);
    this.createPill = this.createPill.bind(this);
  }

  successAlert = () => {
    Alert.alert(
       'Pill creada'
    )
  }

  errorAlert = () => {
    Alert.alert(
       'Lo sentimos, ocurrio un error'
    )
  }
  

  createPill(params) {
    const request = new Request('https://963d7874.ngrok.io/farmacy/pill/new', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(params)
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

  render() {
    return(
      <Formik
      initialValues={{ name: '', illness: '', hours: '', doctor:'', period: ''}}
      onSubmit={this.createPill}
    >
      {props => (
        <View style={{margin: 16}}>
          <Text style={styles.bold}>Nombre:</Text>
          <TextInput
            onChangeText={props.handleChange('name')}
            placeholder="Nombre del Medicamento"
            onBlur={props.handleBlur('name')}
            value={props.values.name}
          />
          <Text style={styles.bold}>Combate:</Text>
          <TextInput
            onChangeText={props.handleChange('illness')}
            placeholder="Para combatir..."
            onBlur={props.handleBlur('illness')}
            value={props.values.illness}
          />
          <Text style={styles.bold}>Horas entre cada dosis:</Text>
          <Picker
          selectedValue={props.values.hours}
          style={{ height: 50, width: 200 }}
          onValueChange={props.handleChange('hours')}>
          <Picker.Item label="cada hora" value="1" />
          <Picker.Item label="cada 2 horas" value="2" />
          <Picker.Item label="cada 3 horas" value="3" />
          <Picker.Item label="cada 4 horas" value="4" />
          <Picker.Item label="cada 6 horas" value="5" />
          <Picker.Item label="cada 8 horas" value="8" />
          <Picker.Item label="cada 10 horas" value="10" />
          <Picker.Item label="cada 12 horas" value="12" />
          <Picker.Item label="cada 24 horas" value="24" />
        </Picker>

        <Text style={styles.bold}>Dias que dura el tratamiento:</Text>
        <Picker
          selectedValue={props.values.period}
          style={{ height: 50, width: 200 }}
          onValueChange={props.handleChange('period')}>
          <Picker.Item label="1 dia" value="1" />
          <Picker.Item label="3 dias" value="3" />
          <Picker.Item label="5 dias" value="5" />
          <Picker.Item label="7 dias" value="7" />
          <Picker.Item label="10 dias" value="10" />
          <Picker.Item label="15 dias" value="15" />
          <Picker.Item label="30 dias" value="30" />
        </Picker>

        <Text style={styles.bold}>Doctor que receto el medicamento:</Text>
        <TextInput
          onChangeText={props.handleChange('doctor')}
          placeholder="Recetada Por"
          onBlur={props.handleBlur('doctor')}
          value={props.values.doctor}
        />

  
  
          <Button onPress={props.handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
    );
  }
}