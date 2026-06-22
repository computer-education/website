import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const modul = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/modul" }),
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        badge: z.string().optional(),
        cta_text: z.string().optional(),
        description: z.string().optional(),
        weight: z.number().default(0),
        date: z.date().optional()
    })
});

const kajian = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/kajian" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        pemateri: z.string(),
        date: z.coerce.date(),
        ppt_link: z.string().url().optional(),
        video_link: z.string().url().optional(),
        image: image().optional(),
        description: z.string().optional()
    })
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        author: z.string().optional(),
        date: z.coerce.date(),
        category: z.string().default('Umum'),
        image: image().optional(),
        description: z.string().optional()
    })
});

const kegiatan = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx,mdoc}", base: "./src/content/kegiatan" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        location: z.string().optional(),
        image: image().optional(),
        gallery: z.array(image()).optional(),
        description: z.string().optional()
    })
});

const pengurus = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/pengurus" }),
    schema: ({ image }) => z.object({
        nama: z.string(),
        jabatan: z.string().optional(),
        foto: image().optional(),
        urutan: z.number().default(99)
    })
});

export const collections = {
    modul,
    kajian,
    blog,
    kegiatan,
    pengurus,
};
