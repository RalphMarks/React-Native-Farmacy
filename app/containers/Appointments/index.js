import React from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet } from 'react-native';
import { List, ListItem, ThemeProvider } from 'react-native-elements'

export default class Appointments extends React.Component {

  constructor() {
    super();
    this.state = {lis: []}
  }

  componentDidMount() {
    const request = new Request('https://5b1c0310.ngrok.io/farmacy/appointments', {method: 'GET'});

    fetch(request)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ lis: data })
      })
  }

  render () {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.lis}
          renderItem={({item}) => <Text style={styles.item}> { item.name } { item.time } </Text>} //! La referencia se hace con item
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})