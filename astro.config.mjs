import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
<<<<<<< HEAD
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
=======
			title: 'Aaron',
			social: {
				github: 'https://github.com/aaronburt',
				instagram: 'https://www.instagram.com/aaronmichaelburt'
			},
			sidebar: [
				{
					label: 'Projects',
					items: [
						{ label: 'Password Pusher', link: '/projects/pwpush-implement' },
						{ label: 'Introduction', link: '/projects/introduction' },
					],
				},
				{
					label: 'Java',
					items: [
						{ label: 'FizzBuzz', link: '/projects/java/fizzbuzz' },
						{ label: 'Luhn\'s Algorithm', link: '/projects/java/luhn' }
					]
				},
				{
					label: 'Javascript',
					items: [
						{ label: 'QRCode Generator', link: '/projects/javascript/qr-codegen' },
						{ label: 'Multi-Threading', link: '/projects/javascript/multi-threading'},
						{ label: 'IPMI-manager', link: '/projects/javascript/ipmimanager'},
						{ label: 'TypeChecker', link: '/projects/javascript/typechecker'},
						{ label: 'Burst', link: '/projects/javascript/burst'}
					]
				},
				{
					label: 'Docker',
					items: [
						{ label: 'OAuth2 Proxy', link: '/projects/docker/oauth2-proxy' },
					]
				},
				/*
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				*/
>>>>>>> a09ed55 (Commit)
			],
		}),
	],
});
