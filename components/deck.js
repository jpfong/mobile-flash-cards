import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import DeckListItem from './deck-list-item'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Deck extends Component {
  componentDidMount () {
    const {dispatch} = this.props

    console.log('this.props!aaa!', this.props)
  }

  createDeck = () => {
    console.log('navigate', this.props)
    this.props.navigation.navigate('Create')
  }

  render() {
    return (
      <View>
        <Text>AAAA</Text>
        <TextButton style={{margin: 20}} onPress={this.createDeck}>
          CREATE DECK
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps (deck) {
  return {
    deck
  }
}

export default connect(
  mapStateToProps
)(Deck)

