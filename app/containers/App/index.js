import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Menu from '../Menu';
import PillForm from '../PillForm';
import PillList from '../PillList';
import Pill from '../Pill';
import PillChangeForm from '../PillChangeForm';



const AppNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
  },
  PillForm: {
    screen: PillForm
  },
  PillList: {
    screen: PillList
  },
  Pill: {
    screen: Pill
  },
  PillChangeForm: {
    screen: PillChangeForm
  },
  initialRouteName: "Menu"
});

const AppContainer = createAppContainer(AppNavigator);


export default function App () {
    return (
      <AppContainer />
    );
}