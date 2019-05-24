import React from 'react';
import { Link } from 'gatsby';

// import { Layout } from '../components/Layout/Layout';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { FakeImg } from '../components/FakeImg/FakeImg';
import { Banner } from '../components/Banner/Banner';

import fullWidthImageRollingImg from '../images/full-width-image-rolling.jpg';
import storyImg from '../images/story.jpg';
import familyImg from '../images/family.jpg';

function StoryPage({ location }) {
	return (
		// <Layout location={location}>
		<div className="main">
			<TitleAndMetaTags title="Story" pathname="story" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						The Spirit of an Old School Grocery Meets
						<br />
						<span className="salmon">Today's Technology</span>
					</h1>
				</div>
				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-square" img={storyImg} />
					</div>
				</div>
				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h1>
							Our Philosophy & Why Grit Grocery Matters.<sup className="-yellow">&#9679;</sup>
						</h1>
					</div>

					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure">
							<h2>BEST OF THE FARM = LOCAL</h2><br/>
							<strong>Houston is Happening.</strong> <br/>
							<li>Creates Jobs & Diversifies the Houston Economy</li>
							<li>Minimizes Food Miles & Provides Maximum Freshness</li>
							<li>Reinforces the “Seasonality” of Food</li><br/>

							<h2>UNPROCESSED: WHY EAT WHAT YOU CAN'T PRONOUNCE?</h2><br/>

							<li>Less is more</li>
							<li>REAL FOOD. No Dyes, No Preservatives, No Pesticides, No Hormones</li>
							<li>Processed Is Not Progress</li><br/>

						</p>

					</div>

					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
						Imagine a Farmers Market + Blue Apron, on a food truck. Real food, right in your neighborhood, saving you time without sacrificing health.
						</p>
					</div>
				</div>
			</Section>

			<Banner img={fullWidthImageRollingImg} mobileImg={fullWidthImageRollingImg} />

			<Section className="-white">
				
			<div className="grid">
					<div className="col md-push-1 lg-push-3">
						<h2>BACK TO THE BLOCK = COMMUNITY</h2><br/>
					</div>
				</div>
				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure">
							<strong>We Know Your Dog's Name</strong>
						</p>

						<p className="measure">
						<li>Located in Your Community, Not on the Fringe</li>
						<li>Small store format enables genuine interaction and connection with customers</li>
						<li>Cooking connects & food is meant to be shared</li>
						</p>
					</div>
					</div>	

				<div className="grid">
					<div className="col md-push-1 lg-push-3">
						<h2>EXPERIENCE: SHOP WITH YOUR SHADES ON.</h2><br/>

					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">

						<p className="measure">
						<li>Open-Air Store Front</li>
						<li>Walk, Bike, or METRO to Your Favorite Grit Location</li>
						<li>Distilled Product Offering Allows for a Simplified Shopping Experience</li>
						</p>
					</div>

				

					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={familyImg} />
					</div>
				</div>

				
			</Section>
		</div>
		// </Layout>
	);
}

export default StoryPage;
