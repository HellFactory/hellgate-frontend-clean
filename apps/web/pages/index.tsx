import { PokerDeck } from "poker";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "../components/SuitIcon";

export default function Web() {
  const poker = new PokerDeck({ shuffle: true });
  return (
    <div>
      <h1>Web</h1>
      <SpadeIcon />
      <HeartIcon />
      <DiamondIcon />
      <ClubIcon />
    </div>
  );
}
