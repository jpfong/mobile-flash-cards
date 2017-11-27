export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECKS = 'ADD_DECKS'

export const receiveDecks = (decks) => ({
  type: RECEIVE_DECKS,
  decks
})

export const addDeck = (decks) => ({
  type: ADD_DECKS,
  decks
})
