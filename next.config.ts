import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, '../styles')],
		// prependData: `@import "global.scss";`,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.music.126.net',
			},
			{
				protocol: 'http',
				hostname: '**.music.126.net',
			},
		],
	},
};

export default nextConfig;
