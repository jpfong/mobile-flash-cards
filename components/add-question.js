import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'

class AddDeck extends Component {
  state : {
    question: '',
    answer: ''
  }

  constructor(props) {
    super(props);
    this.state = { question: '', answer: '' };
  }

  render() {
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
        <TextButton style={{margin: 20}} onPress={this.createDeck}>
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

