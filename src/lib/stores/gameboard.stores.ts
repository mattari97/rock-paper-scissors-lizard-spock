import { writable } from "svelte/store";
import type { GameBoard, GameChoice } from "$lib/types";

const initialValue: GameBoard = {
  status: "idle",
  score: 0,
  result: null,
  choices: {
    player: null,
    hand: null,
  },
};

const gameChoices: GameChoice[] = ["lizard", "paper", "rock", "scissors", "spock"];
const getRandomChoice = () => {
  const index = Math.floor(Math.random() * 4);
  return gameChoices[index];
};
const getResult = (choices: GameBoard["choices"]): GameBoard["result"] => {
  const { hand, player } = choices;
  if (hand === player) return "draw";
  switch (player) {
    case "scissors":
      return hand === "paper" || hand === "lizard" ? "win" : "lost";
    case "paper":
      return hand === "rock" || hand === "spock" ? "win" : "lost";
    case "rock":
      return hand === "lizard" || hand === "scissors" ? "win" : "lost";
    case "lizard":
      return hand === "spock" || hand === "paper" ? "win" : "lost";
    default:
      return hand === "scissors" || hand === "rock" ? "win" : "lost";
  }
};

export const gameboard = writable<GameBoard>({ ...initialValue });

const later = (delay: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const startGame = async (player: GameChoice) => {
  // Start game & Register player move
  gameboard.update((prev) => ({ ...prev, status: "playing", choices: { ...prev.choices, player } }));
  console.log("start round");
  // Show random hand move after delay
  const hand = getRandomChoice();
  await later(3000);
  console.log("show hand");
  gameboard.update((prev) => ({ ...prev, choices: { ...prev.choices, hand } }));
  // Show result after delay
  const result = getResult({ player, hand });
  await later(3000);
  console.log("show result");
  gameboard.update((prev) => ({ ...prev, result }));
};

export const resetGame = () => gameboard.set({ ...initialValue });
