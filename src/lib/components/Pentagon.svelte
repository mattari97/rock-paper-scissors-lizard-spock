<script lang="ts">
  import { startGame } from "$lib/stores";
  import GameCard from "$lib/components/GameCard.svelte";
</script>

<div class="relative w-full text-[min(3.75vw,1.25rem)]">
  <img src="/images/bg-pentagon.svg" alt="" />
  <button
    type="button"
    aria-label="Start round with scissors"
    on:click={() => startGame("scissors")}
    class="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 origin-center transition-transform duration-150"
  >
    <GameCard name="scissors" />
  </button>
  <button
    type="button"
    aria-label="Start round with paper"
    on:click={() => startGame("paper")}
    class="absolute right-4 top-[22%] translate-x-1/2 hover:scale-105 origin-center transition-transform duration-150"
  >
    <GameCard name="paper" />
  </button>
  <button
    type="button"
    aria-label="Start round with rock"
    on:click={() => startGame("rock")}
    class="absolute bottom-4 right-[5%] translate-y-1/2 hover:scale-105 origin-center transition-transform duration-150"
  >
    <GameCard name="rock" />
  </button>
  <button
    type="button"
    aria-label="Start round with lizard"
    on:click={() => startGame("lizard")}
    class="absolute bottom-4 left-[5%] translate-y-1/2 hover:scale-105 origin-center transition-transform duration-150"
  >
    <GameCard name="lizard" />
  </button>
  <button
    type="button"
    aria-label="Start round with spock"
    on:click={() => startGame("spock")}
    class="absolute left-4 top-[22%] -translate-x-1/2 hover:scale-105 origin-center transition-transform duration-150"
  >
    <GameCard name="spock" />
  </button>
</div>
