import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Quiz extends Component {
  state: {
    deck: null,
    questionIndex: null,
    showAnswer: null
  }

  constructor(props) {
    super(props);
    this.state = {deck: null};
  }

  componentDidMount() {
    const {title} = this.props.navigation.state.params
    this.setState({deck: this.props.decks[title], questionIndex: 0, showAnswer: false})
  }

  toggleShowAnswer = () => {
    this.setState({showAnswer: !this.state.showAnswer})
  }

  render() {
    const {deck, questionIndex, showAnswer} = this.state
    if (deck) {
      return (
        <View style={styles.item}>
          <Text style={styles.questionCount}>{questionIndex + 1} / {deck.questions.length}</Text>
          <Text style={styles.questionAnswerText}>{showAnswer ? deck.questions[questionIndex].answer : deck.questions[questionIndex].question}</Text>
          <TextButton style={{margin: 20}} onPress={this.toggleShowAnswer}>
            Show Answer
          </TextButton>
          <TextButton style={{margin: 20}} onPress={this.goToAddQuestion}>
            CORRECT
          </TextButton>
          <TextButton style={{margin: 20}} onPress={this.goToAddQuestion}>
            INCORRECT
          </TextButton>
        </View>
      )
    }
    return (
      <View>
        <Text>Wait</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
  },
  questionAnswerText: {
    textAlign: 'center',
    fontSize: 30
  },
  questionCount: {
    textAlign: 'left'
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(Quiz)
