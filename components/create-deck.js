import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { addDeck, fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'

class CreateDeck extends Component {
  state : {
    title: ''
  }

  constructor(props) {
    super(props)
    this.state = { title: '' }
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
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder='Deck Title'
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

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    marginTop: 24
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 8,
    paddingRight: 8,
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(CreateDeck)

