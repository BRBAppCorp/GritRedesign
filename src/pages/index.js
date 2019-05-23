import React from 'react';
import { Link, graphql } from 'gatsby';
import Script from 'react-load-script';

// import { Layout } from '../components/Layout/Layout';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Product } from '../components/Product/Product';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';
//import Logo from '../components/Logo';

import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import ritaImg from '../images/rita.jpg';
import bannerImg from '../images/banner.jpg';
import bannerMobileImg from '../images/banner-mobile.jpg';

function handleScriptLoad() {
	if (typeof window !== `undefined` && window.netlifyIdentity) {
		window.netlifyIdentity.on('init', user => {
			if (!user) {
				window.netlifyIdentity.on('login', () => {
					document.location.href = '/admin/';
				});
			}
		});
	}
	window.netlifyIdentity.init();
}

function IndexPage({ data, location }) {
	return (
		// <Layout location={location}>
		<div className="main">
			<Script
				url="https://identity.netlify.com/v1/netlify-identity-widget.js"
				onLoad={() => handleScriptLoad()}
			/>
			<TitleAndMetaTags />
			<Section>
				<div className="grid">
					<div>
						
					</div>
					<h1 className="col -block md-push-1 lg-push-2 title">
						<span className="title-desc">A better way to do grocery</span>
						<Typewriter
							className="title-desc"
							texts={['local.', 'fresh.', 'delivered to your door']}
						/>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							Healthy is Hard. Processed foods have dominated traditional supermarkets,
							and the grocery shopping process has become miserable and time consuming.
							Grit Grocery’ s mobile markets and home delivery make cooking healthy, easy,
							and fun by bringing smart food options and nutritious meal kit bundles from local farmers and producers,
							straight to your neighborhood.
						</p>
						<p>
							<Link to="/story" className="button">
								Read our story
							</Link>
						</p>
					</div>

					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
						Grit Grocery is launching new neighborhood locations throughout the city! Sign up for our announcements and check Instagram for the latest developments.
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
							<FakeImg className="-three-x-two" img={img2} />
						</div>

						<div className="col fluid md-3 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={ritaImg} />
						</div>
					</div>
				</div>
			</Section>

			<Section className="-blue">
				<div className="grid">
					<h1 className="col md-push-1 lg-push-2">Eat it</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h3 className="measure-wider">Find a shop</h3>
						<p className="measure-wider">
							Buy our frozen bake-at-home packs from a few shops around London.
						</p>
						<p className="measure-wider">
							<Link to="/stockists" className="button">
								See stockists
							</Link>
						</p>
					</div>

					{/* <div className="col md-3 lg-2">
		<h3>Find a shop</h3>
		<p className="small">Buy our frozen bake-at-home packs from a few shops around London.</p>
		<p style="margin-top: 30px;"><a href="/stockists" className="button">See stockists</a></p>
	</div> */}
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={img1} />
					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2">
						<h2 className="h1">It’s pronounced pown-deh-kay-zho.</h2>
					</div>
				</div>
			</Section>

			<Product
				postcodes={data.allPostcodesJson.edges[0].node.allowed}
				stockists={data.allMarkdownRemark.edges}
				location={location}
				soldout
			/>

			<Banner img={bannerImg} mobileImg={bannerMobileImg} />

			<Section className="-salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							A crunchy outside giving way to a cloud-like interior. Sounds ace, right?
							Right.
						</h3>
						<p>Tom Howells – TimeOut London</p>
					</blockquote>
				</div>
			</Section>
		</div>
		// </Layout>
	);
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query IndexPageQuery {
		allPostcodesJson {
			edges {
				node {
					allowed
				}
			}
		}
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						name
						address
						postcode
						outcode
					}
				}
			}
		}
	}
`;

export default IndexPage;
