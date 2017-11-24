import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import DeckListItem from './deck-list-item'
import { receiveDecks } from '../actions'
import { connect } from 'react-redux'
import { fetchDecks } from '../utils/api'
import { AppLoading} from 'expo'

class DecksList extends Component {
  state = {
    ready: false,
    decksArray: []
  }
  componentDidMount () {
    const { dispatch } = this.props

    fetchDecks().then((decks) => {
      dispatch(receiveDecks(decks))
      const decksArray = Object.values(decks)
      decksArray.map((d) => {
        d.key = d.title
      })
      this.setState(() => ({ decksArray }))
      // console.log('decksArray', this.state.decksArray)
    }).then(() => this.setState(() => ({ready: true})))
    /*
    fetchDecks().then((decks) => {
      console.log('decks', decks)
      dispatch(receiveDecks(decks))
    }).then(() => this.setState(() => ({ready: true})))
      .catch((err) => {
      console.log('err', err)
      this.setState(() => ({ready: true}))
    }) */
    this.setState(() => ({ready: true}))
  }

  renderItem = ({item}) => (
    <DeckListItem {...item}/>
  )

  render() {
    const {decksArray} = this.state
    const {decks} = this.props
    console.log('decks!!!', decks)
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View>
        <FlatList
          data={decksArray}
          renderItem={this.renderItem}
        />
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
