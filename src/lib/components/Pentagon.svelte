<script lang="ts">
  import GameCard from "$lib/components/GameCard.svelte";
</script>

<div class="relative w-full text-[min(3.75vw,1.25rem)]">
  <img src="/images/bg-pentagon.svg" alt="" />
  <div class="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <GameCard name="scissors" />
  </div>
  <div class="absolute right-4 top-[22%] translate-x-1/2">
    <GameCard name="paper" />
  </div>
  <div class="absolute bottom-4 right-[5%] translate-y-1/2">
    <GameCard name="rock" />
  </div>
  <div class="absolute bottom-4 left-[5%] translate-y-1/2">
    <GameCard name="lizard" />
  </div>
  <div class="absolute left-4 top-[22%] -translate-x-1/2">
    <GameCard name="spock" />
  </div>
</div>
