import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import DeckListItem from './deck-list-item'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'
import { fetchDecks } from '../utils/api'
import { AppLoading} from 'expo'

class DecksList extends Component {
  state = {
    ready: false
  }
  componentDidMount () {
    const { dispatch } = this.props

    fetchDecks().then((decks) => {
      console.log('decks', decks)
      dispatch(receiveDecks(decks))
    }).then(() => this.setState(() => ({ready: true})))
      .catch((err) => {
      console.log('err', err)
      this.setState(() => ({ready: true}))
    })
  }

  renderItem = ({item}) => (
    <DeckListItem {...item}/>
  )

  render() {
    const {decks} = this.props
    const { ready } = this.state

    console.log('decks in props', decks)
    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(DecksList)
