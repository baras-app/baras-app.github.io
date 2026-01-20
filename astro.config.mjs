// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://baras-app.github.io',
	integrations: [
		starlight({
			title: 'BARAS',
			description: 'Battle Analysis and Raid Assessment System',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/baras-app/baras' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'Overview', slug: 'features/overview' },
					],
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'Overview', slug: 'configuration/overview' },
					],
				},
				{
					label: 'Troubleshooting',
					items: [
						{ label: 'FAQ', slug: 'troubleshooting/faq' },
					],
				},
			],
		}),
	],
});
