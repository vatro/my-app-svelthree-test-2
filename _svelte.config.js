
import { defineConfig } from 'vite'
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export default defineConfig(({ command, mode }) => {
	if (command === 'serve') {
	  return {
		compilerOptions: {
			ssr: true
		},
		preprocess: preprocess(),
		kit: {
			adapter: adapter(),

			// hydrate the <div id="svelte"> element in src/app.html
			target: '#svelte'
		}
	  }
	} else {
	  // command === 'build'
	  return {
		preprocess: preprocess(),

		kit: {
			adapter: adapter(),

			// hydrate the <div id="svelte"> element in src/app.html
			target: '#svelte'
		}
	  }
	}
  })
