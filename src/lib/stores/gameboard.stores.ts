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
const getNewScore = (prev: number, result: GameBoard["result"]) => {
  if (result === "win") return prev + 1;
  if (result === "lost") return prev === 0 ? prev : prev - 1;
  return prev;
};

export const gameboard = writable<GameBoard>({ ...initialValue });

const later = (delay: number = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const startGame = async (player: GameChoice) => {
  const hand = getRandomChoice(); // Get hand choice
  const result = getResult({ player, hand }); // Get result
  // Start game & Register player move
  gameboard.update((prev) => ({ ...prev, status: "playing", choices: { ...prev.choices, player } }));
  // Show random hand move & results after delay
  await later(4000);
  gameboard.update((prev) => {
    const score = getNewScore(prev.score, result);
    return { ...prev, choices: { ...prev.choices, hand }, result, score };
  });
};

export const resetGame = () => gameboard.update((prev) => ({ ...initialValue, score: prev.score }));
