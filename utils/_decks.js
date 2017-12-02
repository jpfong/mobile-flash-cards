import { AsyncStorage } from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'MobileFlashCards:decks'

export function formatDecks (results) {
  if (results === null) {
    return {}
  }
  return JSON.parse(results)
}