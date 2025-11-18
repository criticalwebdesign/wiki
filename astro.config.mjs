// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import relativeLinks from 'astro-relative-links'

// https://astro.build/config
export default defineConfig({
    site: 'https://criticalwebdesign.github.io',
    base: '/wiki',
    integrations: [
		relativeLinks(),
        starlight({
            title: 'Critical Web Design Wiki',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/criticalwebdesign/wiki' }],
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
                    label: 'Chapter 3',
                    autogenerate: { directory: 'chapter-03' },
                },
                {
                    label: 'Chapter 4',
                    autogenerate: { directory: 'chapter-04' },
                },
                // {
                //     label: 'Reference',
                //     autogenerate: { directory: 'reference' },
                // },
                {
                    label: 'Chapters',
                    autogenerate: { directory: 'chapters' },
                },
            ],
        }),
    ],
});
