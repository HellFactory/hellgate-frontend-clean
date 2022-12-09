import { Player } from "../player";
import { shortNameToCard } from "../utils";
import { EHandRank } from "../constants";

describe("Test Player Class", function () {
  it("should create a player", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("2h"), shortNameToCard("3h")],
      position: 1,
    });
    expect(player.name).toBe("John");

    const player2 = new Player({
      name: "Dendi",
      hand: [shortNameToCard("AS"), shortNameToCard("AC")],
      position: 2,
    });
    expect(player2.getHand()).toMatchObject([
      shortNameToCard("AS"),
      shortNameToCard("AC"),
    ]);
  });

  it("should be return valid hand rank", function () {
    const player1 = new Player({
      hand: [shortNameToCard("9C"), shortNameToCard("KC")],
      name: "Player 1",
      position: 1,
    });
    const player2 = new Player({
      hand: [shortNameToCard("5D"), shortNameToCard("5S")],
      name: "Player 2",
      position: 2,
    });
    const boardCards = [
      shortNameToCard("KH"),
      shortNameToCard("5C"),
      shortNameToCard("6S"),
      shortNameToCard("9H"),
      shortNameToCard("JC"),
    ];
    player1.setBoardCards(boardCards);
    player2.setBoardCards(boardCards);

    expect(player1.getHighestHoldingCard()).toMatchObject(
      shortNameToCard("KC")
    );
    expect(player2.getHighestHoldingCard()).toMatchObject(
      shortNameToCard("5S")
    );
  });

  // Bonus Test
  it("should be compare all possible Hands and Flop", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("9h"), shortNameToCard("10h")],
      position: 1,
    });
    player.setBoardCards([
      shortNameToCard("2s"),
      shortNameToCard("3s"),
      shortNameToCard("4s"),
      shortNameToCard("5s"),
      shortNameToCard("6s"),
    ]);
    const actual = player.allPossibleHands();
    expect(actual).toContainEqual(
      expect.arrayContaining([
        shortNameToCard("2s"),
        shortNameToCard("3s"),
        shortNameToCard("4s"),
        shortNameToCard("9h"),
        shortNameToCard("10h"),
      ])
    );
    expect(actual).toContainEqual(
      expect.arrayContaining([
        shortNameToCard("2s"),
        shortNameToCard("3s"),
        shortNameToCard("5s"),
        shortNameToCard("9h"),
        shortNameToCard("10h"),
      ])
    );
    expect(actual).toContainEqual(
      expect.arrayContaining([
        shortNameToCard("3s"),
        shortNameToCard("4s"),
        shortNameToCard("5s"),
        shortNameToCard("9h"),
        shortNameToCard("10h"),
      ])
    );
    expect(actual).toContainEqual(
      expect.arrayContaining([
        shortNameToCard("3s"),
        shortNameToCard("4s"),
        shortNameToCard("6s"),
        shortNameToCard("9h"),
        shortNameToCard("10h"),
      ])
    );

    expect(actual).toContainEqual(
      expect.arrayContaining([
        shortNameToCard("4s"),
        shortNameToCard("5s"),
        shortNameToCard("6s"),
        shortNameToCard("9h"),
        shortNameToCard("10h"),
      ])
    );
    expect(actual).not.toContainEqual(
      expect.arrayContaining([
        shortNameToCard("2s"),
        shortNameToCard("3s"),
        shortNameToCard("5s"),
        shortNameToCard("5s"),
        shortNameToCard("6s"),
      ])
    );
  });
  // Bonus Test
  it("should be find best compare findBestHandTexusHoldem", function () {
    const player = new Player({
      name: "John",
      hand: [shortNameToCard("9h"), shortNameToCard("9c")],
      position: 1,
    });
    player.setBoardCards([
      shortNameToCard("AS"),
      shortNameToCard("3H"),
      shortNameToCard("7D"),
      shortNameToCard("5D"),
      shortNameToCard("9S"),
    ]);
    const actual = player.findBestHandTexusHoldem();
    expect(actual.handRankName).toEqual(EHandRank.ThreeOfAKind);
    expect(actual.handCards).toEqual([
      shortNameToCard("3h"),
      shortNameToCard("9h"),
      shortNameToCard("9c"),
      shortNameToCard("9s"),
      shortNameToCard("As"),
    ]);
    expect(actual.bestHandCardHolding).toEqual(shortNameToCard("9h"));
  });
});
