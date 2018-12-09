import React, { Component } from 'react';
import { Text, View, TextInput, Picker, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik, setFieldValue } from 'formik'


export default class PillChangeForm extends Component {

 constructor(props) {
   super(props);
   this.changePill = this.changePill.bind(this);
 }


 successAlert = () => {
  Alert.alert(
     'Pill actualizada'
  )
}

errorAlert = () => {
  Alert.alert(
     'Lo sentimos, ocurrio un error'
  )
}


 changePill(params) {
  const request = new Request('https://3354b00c.ngrok.io/farmacy/pill', {
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

 render () {
  const { navigation } = this.props;
  const pill = navigation.getParam('pill', "");

   return(
    <View>
      <Text>Change Pill</Text>
      

       <Formik
      initialValues={{ name: pill.name, illness: pill.illness, doctor: pill.doctor, period: pill.period, hours: pill.hours}}
      onSubmit={this.changePill}
    >
      {props => (
        <View>
          <TextInput
            onChangeText={props.handleChange('name')}
            placeholder="Nombre del Medicamento"
            onBlur={props.handleBlur('name')}
            value={props.values.name}
          />
          <TextInput
            onChangeText={props.handleChange('illness')}
            placeholder="Para combatir..."
            onBlur={props.handleBlur('illness')}
            value={props.values.illness}
          />
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
          <Picker.Item label="30 d" value="30" />
        </Picker>

          <TextInput
            onChangeText={props.handleChange('doctor')}
            placeholder="Recetada Por"
            onBlur={props.handleBlur('doctor')}
            value={props.values.doctor}
          />

  
  
          <Button onPress={props.handleSubmit} title="Actualizar" />
        </View>
      )}
    </Formik>



    </View> 
   );
 }
}