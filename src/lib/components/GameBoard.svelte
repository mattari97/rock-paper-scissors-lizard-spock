<script lang="ts">
  import { fade } from "svelte/transition";
  import { gameboard, resetGame } from "$lib/stores";
  import type { GameBoard } from "$lib/types";
  import GameCard from "$lib/components/GameCard.svelte";
  import Placeholder from "$lib/components/Placeholder.svelte";
  const getResultMsg = (result: GameBoard["result"]) => {
    if (result === "win") return "You win";
    if (result === "lost") return "You lose";
    return "Draw";
  };
  $: resultMsg = getResultMsg($gameboard.result);
</script>

<div class="w-full grid grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-6 lg:gap-x-16 lg:w-max lg:mx-auto">
  <div class="flex flex-col gap-[min(6vw,3rem)] items-center col-span-1 lg:col-start-1">
    {#if $gameboard.choices.player}
      <div class="text-[min(6vw,3rem)] lg:order-1">
        <GameCard name={$gameboard.choices.player} halo={$gameboard.result === "win"} />
      </div>
    {/if}
    <span class="uppercase text-[min(4vw,1.5rem)]">You Picked</span>
  </div>
  <div class="flex flex-col gap-[min(6vw,3rem)] items-center col-span-1 lg:col-start-3">
    {#if $gameboard.choices.hand}
      <div in:fade={{ duration: 700 }} class="text-[min(6vw,3rem)] lg:order-1">
        <GameCard name={$gameboard.choices.hand} halo={$gameboard.result === "lost"} />
      </div>
    {:else}
      <div class="text-[min(6vw,3rem)] lg:order-1">
        <Placeholder />
      </div>
    {/if}
    <span class:animate-pulse={!$gameboard.choices.hand} class="uppercase text-[min(4vw,1.5rem)]"
      >{!$gameboard.choices.hand ? "Picking..." : "The House Picked"}</span
    >
  </div>
  <div
    class:opacity-0={!$gameboard.result}
    class:pointer-events-none={!$gameboard.result}
    class="col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:place-self-center flex flex-col items-center gap-6 transition-opacity duration-700 ease-in-out"
  >
    <span class="uppercase text-6xl font-bold">{resultMsg}</span>
    <button
      type="button"
      aria-label="Restart game"
      disabled={!$gameboard.result}
      on:click={resetGame}
      class="uppercase text-lg bg-neutral-white text-neutral-dark tracking-widest border-2 border-neutral-white rounded-lg px-14 pt-[0.625rem] pb-3 leading-none hover:scale-105 transition-transform duration-150 origin-center"
      >Play Again</button
    >
  </div>
</div>
