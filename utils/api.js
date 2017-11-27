import {AsyncStorage} from 'react-native'
import {formatDecks, FLASHCARDS_STORAGE_KEY} from './_decks'

export function fetchDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDecks)
}

export function addDeck(deck) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}
