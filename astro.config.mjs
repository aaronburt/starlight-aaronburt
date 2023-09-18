import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Aaron',
			social: {
				github: 'https://github.com/aaronburt',
				instagram: 'https://www.instagram.com/aaronmichaelburt'
			},
			sidebar: [
				{
					label: 'Projects',
					items: [
						{ label: 'Introduction', link: '/projects/introduction' },
					],
				},
				{
					label: 'Java',
					items: [
						{ label: 'FizzBuzz', link: '/projects/java/fizzbuzz' },
						{ label: 'Luhn\'s Algorithm', link: '/projects/java/luhn' },
						{ label: 'Password Pusher', link: '/projects/java/pwpush-implement' },
					]
				},
				{
					label: 'Javascript',
					items: [
						{ label: 'Wallpaper API', link: '/projects/javascript/wallpaper-api' },
						{ label: 'QRCode Generator', link: '/projects/javascript/qr-codegen' },
						{ label: 'Multi-Threading', link: '/projects/javascript/multi-threading'},
						{ label: 'IPMI-manager', link: '/projects/javascript/ipmimanager'},
						{ label: 'TypeChecker', link: '/projects/javascript/typechecker'},
						{ label: 'CSV to JSON', link: '/projects/javascript/csvtojson'},

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
			],
		}),
	],
});
