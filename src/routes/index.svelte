<script lang="ts">
  import { scale, blur } from "svelte/transition";
  import { gameboard } from "$lib/stores";
  import Pentagon from "$lib/components/Pentagon.svelte";
  import GameBoard from "$lib/components/GameBoard.svelte";
</script>

<svelte:head>
  <title>Frontend Mentor | Rock, Paper, Scissors, Lizard, Spock</title>
</svelte:head>

<main class="py-16 my-auto flex">
  {#if $gameboard.status === "idle"}
    <div in:blur={{ duration: 300 }} class="mx-auto max-w-[85%]">
      <Pentagon />
    </div>
  {:else}
    <div in:scale={{ duration: 300 }} class="w-full">
      <GameBoard />
    </div>
  {/if}
</main>
