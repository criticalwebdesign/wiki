// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://criticalwebdesign.github.io',
    base: '/wiki',
    integrations: [
        starlight({
            title: 'CWD Wiki',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/criticalwebdesign' }],
            editLink: {
                baseUrl: 'https://criticalwebdesign.github.io/wiki',
            },
            sidebar: [
                {
                    label: 'Home', link: './'
                },
                // {
                //     label: 'Guides',
                //     items: [
                //         // Each item here is one entry in the navigation menu.
                //         { label: 'Example Guide Example Guide', slug: 'guides/example' },
                //     ],
                // }, 
                {
                    label: 'Chapter 4',
                    autogenerate: { directory: 'chapter-04' },
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
                {
                    label: 'Chapters',
                    autogenerate: { directory: 'chapters' },
                },
            ],
        }),
    ],
});
