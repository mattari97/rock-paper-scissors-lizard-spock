import { writable } from "svelte/store";

export const rulesOpen = writable<boolean>(false);

export const toggleRulesOpen = () => rulesOpen.update((prev) => !prev);
