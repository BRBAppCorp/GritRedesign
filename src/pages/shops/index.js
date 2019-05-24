import React from 'react';
import { graphql } from 'gatsby';

import { TitleAndMetaTags } from '../../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../../components/Section/Section';
import { FakeImg } from '../../components/FakeImg/FakeImg';
import { Banner } from '../../components/Banner/Banner';

import { createGroupedArray } from '../../utils/createGroupedArray';

import stockImg from '../../images/stock.jpg';
import fullWidthImageTwoHandsImg from '../../images/full-width-image-twohands.jpg';

function Shop({ className, shop }) {
	return (
		<div className={`col sm-10 md-3 ${className}`}>
			<div>
				<h3>{shop.name}</h3>
				<h4>{shop.area}</h4>
				<address>
					{shop.address}
					<br />
					{shop.postcode}
				</address>
				<a
					href={`https://www.google.com/maps/dir/?api=1&destination=${shop.address}`}
					className="small faded"
					target="_blank">
					View on map
				</a>
			</div>
		</div>
	);
}

function ShopsPage({ data }) {
	const groupedData = createGroupedArray(data.allMarkdownRemark.edges, 3);

	return (
		<div className="main">
			<TitleAndMetaTags title="Shops" pathname="shops" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Where to find us
						<br />
					</h1>
				</div>

				{groupedData.map((group, index) => (
					<div key={`group-${index}`} className="grid shops-list">
						{group.map(({ node }, index) => (
							<Shop
								key={node.frontmatter.name}
								shop={node.frontmatter}
								className={index === 0 ? 'md-push-2 lg-push-3' : ''}
							/>
						))}
					</div>
				))}
			</Section>

			<Section className="-blue center">
				<div className="grid">
					<h2>Can't find a Grit Grocery near you?</h2>
					<p>Bring us to your neighborhood!</p>
					<a className="button" href="./product-request-form.pdf" target="_blank">
						Get us to you
					</a>
				</div>
			</Section>

			<Banner img={fullWidthImageTwoHandsImg} mobileImg={fullWidthImageTwoHandsImg} />

			<Section className="-blue shops-interest">
				<div className="grid">
					<h2 className="h1 col md-push-1 lg-push-2">Interested in hosting us?</h2>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure-wider">
							We're currently growing our network of retailers in London. If you're
							interested in stocking our product at your store, please call Clara on
							+447952216979 or email us at{' '}
							<a href="mailto:oi@donarita.co.uk">oi@donarita.co.uk</a>. Distributors
							welcome.
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={stockImg} />
					</div>
				</div>
			</Section>
		</div>
	);
}

export default ShopsPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query ShopsQuery {
		allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___outcode] }) {
			edges {
				node {
					frontmatter {
						title
						name
						area
						address
						postcode
						outcode
					}
				}
			}
		}
	}
`;
