import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import TextButton from './TextButton'
import { addDeck, fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'

class CreateDeck extends Component {
  state : {
    title: ''
  }

  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  createDeck = () => {
    if (this.state.title) {
      const { dispatch } = this.props

      const deck = {
        title: this.state.title,
        questions: []
      }
      // add to localstorage and to redux
      addDeck(deck).then(() => {
        fetchDecks().then((decksUpdated) => {
          dispatch(receiveDecks(decksUpdated))
          this.props.navigation.navigate('Deck', { title: this.state.title })
        })
      })
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Deck Name"
          autoFocus={true}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <TextButton style={{margin: 20}} onPress={this.createDeck}>
          CREATE DECK
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CreateDeck)

