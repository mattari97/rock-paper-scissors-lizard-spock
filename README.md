# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge (w/ options) on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![Rock Paper Scissors w/ options | Desktop version](./fullpage-desktop.png)

![Rock Paper Scissors w/ options | Mobile version](./fullpage-mobile.png)

### Links

- Solution URL: [Go to solution](https://www.frontendmentor.io/solutions/rest-countries-api-w-svelkit-ts-tailwind-axios-and-ssr-prefetching-i4wDMW6EGE)
- Live Site URL: [Go to live site](https://rest-countries-api-seven-taupe.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [LocalStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) - Save data on the browser
- [SvelteKit](https://kit.svelte.dev/) - JS framework w/ SSR (Server-Side Rendering)
- [TailwindCss](https://tailwindcss.com/) - Utility-first CSS framework
- [Typescript](https://www.typescriptlang.org/) - Strongly typed JS

### What I learned

#### Debounce function

I use this methods to make sure the name filter (from the search input) is not updated on every keypress of the user.

function definition:

```ts
export const debounce = (callback: (props: any) => void, delay: number = 750) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...props: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(props);
    }, delay);
  };
};
```

Then in the component:

```ts
let value: string = $filters.name; // This is the value of the input

const onChange = debounce(() => updateFilter("name", value.trim()), 250); // Runs only if user stops typing for 250ms
$: value && onChange(); // the $: makes sure onChange is called everytime "value" changes
```

#### Prefers Color Scheme

Get the color scheme from the user settings in the browser:

```ts
const getPreferedColorScheme = (): ThemeMode => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getInitialTheme = (defaultValue: ThemeMode): ThemeStore => {
  if (!browser) return { mode: defaultValue, prefersColorScheme: true };
  const json = window.localStorage.getItem("theme");

  if (json === null) return { mode: getPreferedColorScheme(), prefersColorScheme: true };

  const storedTheme = JSON.parse(json) as ThemeStore;
  const mode = storedTheme.prefersColorScheme ? getPreferedColorScheme() : storedTheme.mode;
  return { ...storedTheme, mode };
};
```

#### Object.values | Object.keys | Object.entries

Use these to loop on a JavaScript object like it is an Array

```ts
Object.values(data.currencies).forEach((currency) => {
  props.currencies = props.currencies.concat((currency as any).name, " ");
});
```

#### $app/store --> navigating

A readable reactive variable that can be used to track is the app is navigating between two endpoints.

I used it to show a loading overlay when fetching a country in the app:

```ts
import { navigating } from "$app/stores";
$: showOverlay = $navigating !== null; // If true --> Show the loading indicator
```

#### $lib alias

Use src/lib/\* to prevent using absolute paths for imports

When using Typescript you need to declare the path in your tsconfig:

```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    // If you want to change is from src/lib you'll need to update your svelte.config file.
    "paths": {
      "$lib": ["src/lib"],
      "$lib/*": ["src/lib/*"]
    }
  }
}
```

Then your imports look like this:

```ts
import SearchInput from "$lib/components/SearchInput.svelte";
import RegionSelect from "$lib/components/RegionSelect.svelte";
import CountryCard from "$lib/components/CountryCard.svelte";
import type { CountrySimple } from "$lib/types";
import { filterCountries } from "$lib/helpers";
import { filters } from "$lib/stores";
```

### Continued development

I want to implement a service worker to cache the already fetched endpoint for each individual country.

E.g. `https://my-url/countries/[name]`

This way pages would load faster and the Open Source API owners would appreciate the fewer requests.

### Useful resources

- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
- [Phosphoricons](https://phosphoricons.com/) - Flexible icon family for interfaces, diagrams, presentations, etc...

## Author

- Frontend Mentor - [@AntoineC-dev](https://www.frontendmentor.io/profile/AntoineC-dev)
