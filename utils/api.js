import {AsyncStorage} from 'react-native'
import {formatDecks, FLASHCARDS_STORAGE_KEY} from './_decks'

export function fetchDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDecks)
}

export function submitEntry({entry, key}) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}
