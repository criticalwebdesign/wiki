// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import relativeLinks from 'astro-relative-links'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://criticalwebdesign.github.io',
    base: '/wiki',
    integrations: [
        // relativeLinks(),
        starlight({
            title: 'Critical Web Design Wiki',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/criticalwebdesign/wiki' }],
            editLink: {
                baseUrl: 'https://criticalwebdesign.github.io/wiki',
            },
            sidebar: [

                { label: 'Home', link: './' },
                { label: '0. Introduction', autogenerate: { directory: 'chapter-00' }, },
                { label: '1. Networks', autogenerate: { directory: 'chapter-01' }, },
                { label: '2. View Source', autogenerate: { directory: 'chapter-02' }, },
                { label: '3. Critical Design', autogenerate: { directory: 'chapter-03' }, },
                { label: '4. On the Grid', autogenerate: { directory: 'chapter-04' }, },



                { label: 'Chapters', autogenerate: { directory: 'chapters' }, },
                { label: 'Resources', autogenerate: { directory: 'resources' }, },
            ],
            customCss: [
                './src/styles/styles.css', // relative path to custom CSS file
                './src/styles/global.css', // tailwind CSS 
            ],
            components: {},
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});