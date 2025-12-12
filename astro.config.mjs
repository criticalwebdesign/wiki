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
                { label: '0. Introduction', autogenerate: { directory: 'chapter-00' }, },
                { label: '1. Networks', autogenerate: { directory: 'chapter-01' }, },
                { label: '2. View Source', autogenerate: { directory: 'chapter-02' }, },
                { label: '3. Critical Design', autogenerate: { directory: 'chapter-03' }, },
                { label: '4. On the Grid', autogenerate: { directory: 'chapter-04' }, },

                // { label: 'Reference', autogenerate: { directory: 'reference' }, },

                {
                    label: 'Chapters',
                    autogenerate: { directory: 'chapters' },
                },
                {
                    label: 'Resources',
                    autogenerate: { directory: 'resources' },
                },
            ],
            customCss: [
                './src/assets/styles.css', // relative path to custom CSS file
            ],
            components: {
            },
        }),
    ],
});
