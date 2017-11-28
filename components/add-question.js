import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addDeck, fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class AddDeck extends Component {
  state : {
    question: '',
    answer: ''
  }

  constructor(props) {
    super(props);
    this.state = { question: '', answer: '' };
  }

  addQuestion = () => {
    const { question, answer } = this.state
    if (question && question.length > 0 && answer && answer.length > 0) {
      const { dispatch, decks } = this.props
      const {title} = this.props.navigation.state.params

      const deck = decks[title]
      deck.questions.push({
        question,
        answer
      })
      // add to localstorage and to redux
      addDeck(deck).then(() => {
        fetchDecks().then((decksUpdated) => {
          dispatch(receiveDecks(decksUpdated))
          this.props.navigation.navigate('Deck', { title })
        })
      })
    }
  }

  render() {
    const { question, answer } = this.state

    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          autoFocus={true}
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TextButton style={{margin: 20}} onPress={ this.addQuestion } disabled={ question.length <= 0 || answer.length <= 0 }>
          ADD QUESTION
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(AddDeck)

