
//import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
//import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	
	kit: {
		//adapter: adapter(),
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		//ssr: true
	},

	// SvelteKit uses vite-plugin-svelte. Its options can be provided directly here.
	// See the available options at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md
	hot: {
		acceptAccessors: true
	},

	//extensions: ['.svelte'],
	preprocess: preprocess({typescript: true}),

	// REMARK: 'svelte-kit dev' is pre-bundling dependencies anyway, even without this ...
	//prebundleSvelteLibraries: true,	
};

export default config;
