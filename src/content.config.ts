import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const session = defineCollection({
	// Load Markdown and MDX files in the `src/content/session/` directory.
	loader: glob({ base: './src/content/session', pattern: '**/*.{md,mdx}' }),
	// Session metadata shown on the index cards and detail pages.
	schema: z.object({
		// branch 内序号；展示用的 hash 由 branch + commit 计算得出（见 src/lib/session-hash.ts）。
		commit: z.number().int().nonnegative(),
		date: z.coerce.date(),
		record: z.number().int().nonnegative(),
		branch: z.string(),
		title: z.string(),
		speaker: z.string(),
		topics: z.array(z.string()),
		summary: z.string(),
		// Optional link to the recording on bilibili.
		bilibili: z.string().url().optional(),
	}),
});

export const collections = { session };
