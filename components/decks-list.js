import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import DeckListItem from './deck-list-item'

class DecksList extends Component {

  renderItem = ({item}) => {
    return <DeckListItem {...item}/>
  }

  render() {
    const decks = [{
      key: 1,
      deckName: 'deck 1',
      cardsCount: 1
    }, {
      key: 2,
      deckName: 'deck 2',
      cardsCount: 4
    }]

    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}


export default DecksList
