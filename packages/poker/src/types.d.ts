export interface Card {
  rank: string;
  suit: string;
  suitName: string;
  suitOrder: number;
  suitSymbol?: string;
  rankName: string;
  rankValue: number;
}

export interface PlayerInterface {
  hand: Card[];
  name?: string;
  position: number;
}

export interface BestTexasHoldemHand {
  handRankValue: number;
  handRankName: string;
  handCards: Card[];
  handCardsRankValue: number;
  handCardSuits: string[];
  bestHandCardHolding: Card;
  display: string;
}
