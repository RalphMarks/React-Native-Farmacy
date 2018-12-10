import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import { List, ListItem, ThemeProvider } from 'react-native-elements'

export default class PillList extends Component {

  static navigationOptions = {
    title: 'Pills',
  };

  constructor() {
    super();
    this.state = {pills: []}
  }

  componentDidMount() {
    const request = new Request('https://963d7874.ngrok.io/farmacy/pill', {method: 'GET'});

    fetch(request)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.map((d) => {
          console.log(d.name);
        });
        this.setState({ pills: data })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.pills}
          renderItem={({item}) => <Text onPress={() => this.props.navigation.navigate('Pill', {
            pill: item
          })} style={styles.item}>{item.name}</Text>}
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