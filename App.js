import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DecksList from './components/decks-list'
import CreateDeck from './components/create-deck'
import Deck from './components/deck'
import AddQuestion from './components/add-question'
import Quiz from './components/quiz'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  Home: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Create: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Create: {
    screen: CreateDeck
  },
  Deck: {
    screen: Deck
  },
  AddQuestion: {
    screen: AddQuestion
  },
  Quiz: {
    screen: Quiz
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
