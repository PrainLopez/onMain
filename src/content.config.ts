import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const session = defineCollection({
	// Load Markdown and MDX files in the `src/content/session/` directory.
	loader: glob({ base: './src/content/session', pattern: '**/*.{md,mdx}' }),
	// Session metadata shown on the index cards and detail pages.
	schema: z.object({
		hash: z.string(),
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
