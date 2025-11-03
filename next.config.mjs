/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	headers: async () => {
		return [];
	},
};

export default nextConfig;

