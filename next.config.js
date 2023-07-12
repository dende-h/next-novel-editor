module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'enjzxtbbcyrptkkutovq.supabase.co'
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://novel-editor-ver2.vercel.app/',
				permanent: true
			},
			{
				source: '/contact',
				destination: 'https://novel-editor-ver2.vercel.app/contact',
				permanent: true
			},
			{
				source: '/drafts',
				destination: 'https://novel-editor-ver2.vercel.app/drafts',
				permanent: true
			},
			{
				source: '/error',
				destination: 'https://novel-editor-ver2.vercel.app/',
				permanent: true
			},
			{
				source: '/policy',
				destination: 'https://novel-editor-ver2.vercel.app/policy',
				permanent: true
			},
			{
				source: '/profile',
				destination: 'https://novel-editor-ver2.vercel.app/profile',
				permanent: true
			},
			{
				source: '/thanks',
				destination: 'https://novel-editor-ver2.vercel.app/',
				permanent: true
			}
			// その他のリダイレクト設定
		];
	}
};
