import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'

class CreateDeck extends Component {

  state : {
    deckName: ''
  }

  constructor(props) {
    super(props);
    this.state = { deckName: '' };
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
          onChangeText={(deckName) => this.setState({deckName})}
          value={this.state.deckName}
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

