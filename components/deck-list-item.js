import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ListItem, StyleSheet, Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'

class DeckListItem extends Component {
  onPress = () => {
    const {deckName} = this.props
    this.props.navigation.navigate(
      'Deck',
      { deckName })
  }

  render() {
    const {deckName, cardsCount} = this.props

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.item}>
          <Text>
            {deckName}
          </Text>
          <Text>
            {cardsCount} cards
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
})

export default DeckListItem