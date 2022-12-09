import { Card } from "./types";
export class PokerDeck {
  private readonly deck: Card[] = [];

  constructor(options?: { shuffle?: boolean }) {

  }

  private shuffleDeck(): Card[] {
    return []
  }

  public createDeck(): Card[] {
   return []
  }

  public dealCards(count: number): Card[] {
    return []
  }

  public getDeck(): Card[] {
    return this.deck;
  }
}
