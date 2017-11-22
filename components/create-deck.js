import React, { Component } from 'react'
import { Text, View } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'

class CreateDeck extends Component {

  createDeck() {
    console.log('create deck', this.props)
    /*
    this.props.navigation.navigate(
      'Deck',
      { deckName: 'test' }) */
  }

  render() {
    return (
      <View>
        <Text>Create deck</Text>
        <TextButton style={{margin: 20}} onPress={this.createDeck}>
          CREATE DECK
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps({navigation}) {
  return {
    navigation
  }
}

export default connect(mapStateToProps)(CreateDeck)

