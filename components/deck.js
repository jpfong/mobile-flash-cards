import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Deck extends Component {
  state: {
    deck: null
  }

  constructor(props) {
    super(props);
    this.state = { deck: null };
  }

  componentDidMount() {
    const {title} = this.props.navigation.state.params
    this.setState({deck: this.props.decks[title]})
  }

  goToAddQuestion = () => {
    const {title} = this.props.navigation.state.params

    this.props.navigation.navigate('AddQuestion', { title })
  }

  render() {
    const {deck} = this.state
    if (deck) {
      return (
        <View style={styles.item}>
          <Text>{deck.title}</Text>
          <Text>
            {deck.questions.length} cards
          </Text>
          <TextButton style={{margin: 20}} onPress={this.createDeck}>
            START QUIZ
          </TextButton>
          <TextButton style={{margin: 20}} onPress={this.goToAddQuestion}>
            ADD QUESTION
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
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(Deck)

