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
      dispatch(receiveDecks(decks))
    }).then(() => this.setState(() => ({ready: true})))
  }

  renderItem = ({item}) => (
    <DeckListItem {...item} navigation={this.props.navigation}/>
  )

  render() {
    const { ready } = this.state
    const { decks } = this.props

    if (ready === false) {
      return <AppLoading />
    }
    const decksArray = Object.values(decks)
    decksArray.map((d) => {
       d.key = d.title
    })
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
