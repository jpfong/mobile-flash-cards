import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DecksList from './components/decks-list'
import CreateDeck from './components/create-deck'
import {FontAwesome, Ionicons} from '@expo/vector-icons'

const Tabs = TabNavigator({
  History: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  AddEntry: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    },
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator />
      </View>
    )
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/