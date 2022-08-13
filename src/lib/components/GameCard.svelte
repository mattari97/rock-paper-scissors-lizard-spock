<script lang="ts">
  import type { GameChoice } from "$lib/types";
  export let name: GameChoice;
  const getColorsClassesFromName = () => {
    if (name === "scissors") {
      return "bg-primary-scissors-light shadow-primary-scissors-dark";
    } else if (name === "lizard") {
      return "bg-primary-lizard-light shadow-primary-lizard-dark";
    } else if (name === "paper") {
      return "bg-primary-paper-light shadow-primary-paper-dark";
    } else if (name === "rock") {
      return "bg-primary-rock-light shadow-primary-rock-dark";
    } else {
      return "bg-primary-spock-light shadow-primary-spock-dark";
    }
  };
  const colorClasses = getColorsClassesFromName();
  const src = `/images/icon-${name}.svg`;
</script>

<div class="w-[6em] aspect-square rounded-full p-[0.75em] shadow-[0_0.25em_0_0] {colorClasses}">
  <div
    class="bg-neutral-white w-full h-full rounded-full flex justify-center items-center shadow-inner shadow-neutral-header/60"
  >
    <div class="w-[2.125em]">
      <img {src} alt="" class="w-full" />
    </div>
  </div>
</div>
