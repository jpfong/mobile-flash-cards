import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DecksList from './components/decks-list'
import CreateDeck from './components/create-deck'
import Deck from './components/deck'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

const Tabs = TabNavigator({
  Home: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  AddDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    },
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck
  },
  AddDeck: {
    screen: CreateDeck
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
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