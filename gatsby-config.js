module.exports = {
	siteMetadata: {
		title: 'Grit Grocery',
		url: 'https://gritgrocery.com',
		description: 'Grit+ Redesign by NTS.',
		keywords: 'grit, grocery, store',
		twitter_author: '@gritgrocery'
	},
	plugins: [
		'gatsby-plugin-layout',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#f09a7a',
				showSpinner: false
			}
		},
		'gatsby-transformer-json',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'images'
						}
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 2048
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Grit Grocery',
				short_name: 'GG',
				start_url: '/',
				background_color: '#fafafa',
				theme_color: '#fafafa',
				display: 'standalone',
				icon: './static/favicon.ico'
			}
		},
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-netlify'
	]
};
