import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export const TitleAndMetaTags = (props) => (
	<StaticQuery
		query={metadata_query}
		render={data => render({...data, ...props})}
	/>
);

const render = ({ url, pathname, title, description, keywords, twitter_author }) => (
	<Helmet
		htmlAttributes={{lang: 'en'}}
		title={title}
		meta={[
			{name: 'description', content: description},
			{name: 'keywords', content: keywords},
			{property: 'og:url', content: `${url}/${pathname}`},
			{property: 'og:image', content: `${url}/social/hero-1.jpg`},
			{property: 'og:image', content: `${url}/social/hero-2.jpg`},
			{property: 'og:image', content: `${url}/social/hero-3.jpg`},
			{property: 'og:image', content: `${url}/social/hero-4.jpg`},
			{property: 'og:title', content: title},
			{property: 'og:description', content: description},
			{name: 'twitter:url', content: `${url}/${pathname}`},
			{name: 'twitter:image', content: `${url}/social/hero-1.jpg`},
			{name: 'twitter:title', content: title},
			{name: 'twitter:description', content: description},
			{name: 'twitter:site', content: twitter_author},
			{name: 'twitter:card', content: 'summary_large_image'},
			{name: 'twitter:creator', content: twitter_author}
		]}
		link={[
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat'}
		]}
	/>
);

const metadata_query = graphql`
	query GetSiteMetadata {
		site {
			siteMetadata {
				title
				url
				description
				keywords
				twitter_author
			}
		}
	}
`;
