// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	// 纯静态站点：构建产物为 dist/ 静态文件，部署到 Cloudflare 时无需 deploy 命令（不走 wrangler/Worker SSR）。
	output: 'static',
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
