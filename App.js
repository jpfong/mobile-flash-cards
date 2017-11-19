import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DecksList from './components/decks-list'
import CreateDeck from './components/create-deck'

const Tabs = TabNavigator({
  History: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      // tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    },
  },
  AddEntry: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      // tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
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