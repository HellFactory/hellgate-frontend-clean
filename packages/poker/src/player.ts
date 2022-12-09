import { BestTexasHoldemHand, Card, PlayerInterface } from "./types";
import {
  calculateHandRank,
  makeReadableHandArray,
  permutations,
} from "./utils";

export class Player {
  public name: string;
  private handCards: Card[];

  public boardCards: Card[] = [];

  public position: number;

  constructor(player: PlayerInterface) {
    this.name = player.name || `Player ${player.position}`;
    this.handCards = player.hand;
    this.position = player.position;
    return this;
  }

  public setBoardCards(cards: Card[]): this {
    return this;
  }

  public getBoardCards(): Card[] {
    return this.boardCards;
  }

  public addCardToHand(card: Card[]): void {
  }

  public getHand(): Card[] {
    return this.handCards;
  }

  public gameReset(): void {
    this.handCards = [];
    this.boardCards = [];
  }

  public getHighestHoldingCard(): Card {
    return null;
  }

  public sumCardRankValue(cards: Card[]): number {
    return 0
  }

  public allPossibleHands(): Card[][] {
    return []
  }

  public findBestHandTexusHoldem(): BestTexasHoldemHand {
    return {
      handRankValue: 0,
      handRankName: '',
      handCards: [],
      handCardSuits: [],
      handCardsRankValue: this.sumCardRankValue([]),
      bestHandCardHolding: this.getHighestHoldingCard(),
      display: makeReadableHandArray([]),
    };
  }
}
