// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import relativeLinks from 'astro-relative-links'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://criticalwebdesign.github.io',
    base: '/wiki',
    integrations: [
        // relativeLinks(), // breaks 404 - only use for local builds!
        starlight({
            title: 'Critical Web Design Wiki',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/criticalwebdesign/wiki' }],
            editLink: {
                baseUrl: 'https://criticalwebdesign.github.io/wiki',
            },
            sidebar: [

                { label: 'Home', link: './' },
                { label: '0. Introduction', autogenerate: { directory: 'chapter-00' }, collapsed: false },
                { label: '1. Networks', autogenerate: { directory: 'chapter-01' }, collapsed: true },
                { label: '2. View Source', autogenerate: { directory: 'chapter-02' }, collapsed: true },
                { label: '3. Critical Design', autogenerate: { directory: 'chapter-03' }, collapsed: true },
                { label: '4. On the Grid', autogenerate: { directory: 'chapter-04' }, collapsed: true },
                { label: '5. Usability and Forms', autogenerate: { directory: 'chapter-05' }, collapsed: true },
                { label: '6. Off the Grid', autogenerate: { directory: 'chapter-06' }, collapsed: true },
                { label: '7. Ethical by Design', autogenerate: { directory: 'chapter-07' }, collapsed: true },
                { label: '8. Generative Design', autogenerate: { directory: 'chapter-08' }, collapsed: false },
                { label: '9. Data Tracking', autogenerate: { directory: 'chapter-09' }, collapsed: true },
                { label: '10. Design and Power', autogenerate: { directory: 'chapter-10' }, collapsed: true },
                { label: '11. Distribution', autogenerate: { directory: 'chapter-11' }, collapsed: true },


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