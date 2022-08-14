export type GameChoice = "rock" | "paper" | "scissors" | "lizard" | "spock";

export interface GameBoard {
  status: "idle" | "playing";
  score: number;
  result: ("win" | "lost" | "draw") | null;
  choices: {
    player: GameChoice | null;
    hand: GameChoice | null;
  };
}

export type LocalStorageKey = "score";
