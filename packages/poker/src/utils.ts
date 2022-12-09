import { Card } from './types'

/**
 * returns all permutations of a given array
 * @param arr
 * @param size
 */
export const permutations = <T>(arr: T[], size: number): T[][] => {
  return []
}

/**
 * example full house hand = [2, 2, 2, 3, 3]
 * @param hand - array of cards
 */
export const isFullHouse = (hand: Card[]): boolean => {
  return false
}

/**
 * Flush example card array = [KD, JD, 4D, 5D, 7D]
 * @param hand - array of cards
 */
export const isFlush = (hand: Card[]): boolean => {
  return false
}

/**
 * Straight example card array = [KD, QD, 10D, 9D, 8D]
 * @param hand
 */
export const isStraight = (hand: Card[]): boolean => {
  return false
}

/**
 * Straight Flush example card array = [8D, 9D, 10D, JD, QD]
 * @param hand
 */
export const isStraightFlush = (hand: Card[]): boolean => {
  return false
}

/**
 * example Royal Flush hand = [10D, JD, QD, KD, AD]
 * * The first card in the array must be a 10 value
 * @param hand
 */
export const isRoyalFlush = (hand: Card[]): boolean => {
  return false
}

/**
 * example Four of a Kind hand = [2D, 2H, 2S, 2C, 3D]
 * @param hand
 */
export const isFourOfAKind = (hand: Card[]): boolean => {
  return false
}

/**
 * example Three of a Kind hand = [2D, 2H, 2S, 3C, 4D]
 * @param hand
 */
export const isThreeOfAKind = (hand: Card[]): boolean => {
  return false
}

/**
 * example Two Pair hand = [2D, 2H, 3S, 3C, 4D]
 * @param hand
 */
export const isTwoPair = (hand: Card[]): boolean => {
  return false
}

/**
 * example One Pair hand = [2D, 2H, 3S, 4C, 5D]
 * @param hand
 */
export const isPair = (hand: Card[]): boolean => {
  return false
}

/**
 * this function will find the highest rank of a hand and return the rank name
 * @param cards
 */
export const calculateHandRank = (
  cards: Card[],
): {
  rank: string;
  rankValue: number;
} => {
  return {
    rank: null,
    rankValue: 0,
  }
}

/**
 * transform short string to card object
 * @param shortCardName
 */
export const shortNameToCard = (shortCardName: string): Card => {
  return {
    rank: '',
    rankName: '',
    rankValue: 0,
    suit: '',
    suitName: '',
    suitOrder: 0,
  }
}

/**
 * transform card object to short string
 * example return expected value = 2D
 * @param card
 */
export const cardToShortName = (card: Card): string => {
  return ''
}


/**
 * input card array and return string combination short card names
 * @param cards
 */
export const makeReadableHandArray = (cards: Card[]): string => {
  return cards
    .map((card) => cardToShortName(card))
    .join(' ')
}
