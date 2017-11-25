import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import TextButton from './TextButton'
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
    if (this.state.deckName) {
      this.props.navigation.navigate('Deck', { deckName: this.state.deckName })
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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

function mapStateToProps() {
  return {
  }
}

export default connect(mapStateToProps)(CreateDeck)

