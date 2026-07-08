import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
		generateId: ({ entry, data }) => `${data.lang}/${data.slug}`,
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.string().optional(),
			excerpt: z.string().optional(),
			slug: z.string(),
			lang: z.enum(['en', 'es']),
			featured: z.boolean().optional(),
		}),
});

export const collections = { blog };
