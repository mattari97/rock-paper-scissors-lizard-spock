<script lang="ts">
  import { startGame, rulesOpen } from "$lib/stores";
  import GameCard from "$lib/components/GameCard.svelte";
</script>

<div class="relative w-full text-[min(4vw,1.25rem)]">
  <img src="/images/bg-pentagon.svg" alt="" />
  <div
    tabindex={$rulesOpen ? -1 : 0}
    on:click={() => startGame("scissors")}
    class="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 origin-center transition-transform duration-150 cursor-pointer"
  >
    <GameCard name="scissors" />
  </div>
  <div
    tabindex={$rulesOpen ? -1 : 0}
    on:click={() => startGame("paper")}
    class="absolute right-4 top-[22%] translate-x-1/2 hover:scale-105 origin-center transition-transform duration-150 cursor-pointer"
  >
    <GameCard name="paper" />
  </div>
  <div
    tabindex={$rulesOpen ? -1 : 0}
    on:click={() => startGame("rock")}
    class="absolute bottom-4 right-[5%] translate-y-1/2 hover:scale-105 origin-center transition-transform duration-150 cursor-pointer"
  >
    <GameCard name="rock" />
  </div>
  <div
    tabindex={$rulesOpen ? -1 : 0}
    on:click={() => startGame("lizard")}
    class="absolute bottom-4 left-[5%] translate-y-1/2 hover:scale-105 origin-center transition-transform duration-150 cursor-pointer"
  >
    <GameCard name="lizard" />
  </div>
  <div
    tabindex={$rulesOpen ? -1 : 0}
    on:click={() => startGame("spock")}
    class="absolute left-4 top-[22%] -translate-x-1/2 hover:scale-105 origin-center transition-transform duration-150 cursor-pointer"
  >
    <GameCard name="spock" />
  </div>
</div>
