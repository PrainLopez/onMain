// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Space Mono',
			cssVariable: '--font-space-mono',
			fallbacks: ['monospace'],
			weights: [400, 700],
			styles: ['normal'],
		},
	],
});
