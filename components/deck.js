import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  state: {
    deck: null
  }

  constructor(props) {
    super(props);
    this.state = { deck: null };
  }

  componentDidMount () {
    console.log('this.props', this.props)
    const {title} = this.props.navigation.state.params
    console.log('title', title)
    this.setState({deck: this.props.decks[title]})
    console.log('deck', this.state.deck)
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

