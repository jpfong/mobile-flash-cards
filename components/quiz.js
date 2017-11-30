import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Quiz extends Component {
  state: {
    deck: null,
    questionIndex: null,
    showAnswer: null,
    correctAnswerCount: 0
  }

  constructor(props) {
    super(props)
    this.state = {deck: null, correctAnswerCount: 0}
  }

  componentDidMount() {
    const {title} = this.props.navigation.state.params
    this.setState({deck: this.props.decks[title], questionIndex: 0, showAnswer: false})
  }

  toggleShowAnswer = () => {
    this.setState({showAnswer: !this.state.showAnswer})
  }

  handleCorrect = () => {
    this.setState({correctAnswerCount: this.state.correctAnswerCount + 1, showAnswer: false, questionIndex: this.state.questionIndex + 1 })
  }

  handleIncorrect = () => {
    this.setState({ showAnswer: false, questionIndex: this.state.questionIndex + 1 })
  }

  showPctCorrectAnswer() {
    return `${this.state.correctAnswerCount / this.state.deck.questions.length * 100} %`
  }

  render() {
    const {deck, questionIndex, showAnswer} = this.state
    if (deck) {
      return (
        <View style={styles.item}>
          <Text style={styles.questionCount}>{questionIndex + 1} / {deck.questions.length}</Text>
          {questionIndex < deck.questions.length ?
            <View>
              <Text style={styles.questionAnswerText}>{showAnswer ? deck.questions[questionIndex].answer : deck.questions[questionIndex].question}</Text>
              <TextButton style={{margin: 20}} onPress={this.toggleShowAnswer}>
                Show Answer
              </TextButton>
              <TextButton style={{margin: 20}} onPress={this.handleCorrect}>
                CORRECT
              </TextButton>
              <TextButton style={{margin: 20}} onPress={this.handleIncorrect}>
                INCORRECT
              </TextButton>
            </View> :
            <View>
              <Text style={styles.correctAnswerRateText}>Your result: {this.showPctCorrectAnswer()}</Text>
            </View>
          }

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
  correctAnswerRateText: {
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
