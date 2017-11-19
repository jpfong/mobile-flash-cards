import React from 'react'
import { View, Text } from 'react-native'

export default function deckListItem ({deckName, cardsCount}) {
  return (
    <View>
      <Text>
        {deckName}
      </Text>
      <Text>
        {cardsCount} cards
      </Text>
    </View>
  )
}
