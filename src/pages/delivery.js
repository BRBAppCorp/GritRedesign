import React from 'react';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { FakeImg } from '../components/FakeImg/FakeImg';

import ingredientsImg from '../images/ingredients.jpg';

function IngredientsPage() {
	return (
		<div className="main">
			<TitleAndMetaTags title="Ingredients" pathname="ingredients" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						GRIT &amp; Delivery
						<br />
						
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							<h2>Monday - Thursday</h2>
							Order by 4pm for same-day Delivery <br/>
							Delivery hours: 6 - 9pm
						</p>

						<p className="measure">
							<h2>Sunday</h2>
							Order by 2pm for same-day Delivery <br />
							Delivery hours: 3 - 6 pm
						</p>
						<p>
							Questions? See our FAQ
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={ingredientsImg} />
						<FakeImg className="-three-x-two" img={ingredientsImg} />
						<FakeImg className="-three-x-two" img={ingredientsImg} />
						<FakeImg className="-three-x-two" img={ingredientsImg} />
					</div>
				</div>
			</Section>
		</div>
	);
}

export default IngredientsPage;
