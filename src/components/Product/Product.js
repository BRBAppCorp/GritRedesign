import React from 'react';
import ReactGA from 'react-ga';
import queryString from 'query-string';

import { ProductHolder } from './ProductHolder';
import { PostcodeValidator } from '../PostcodeValidator/PostcodeValidator';
import { ShopRecommendation } from '../ShopRecommendation/ShopRecommendation';
import { ProspectSignupForm } from '../Forms/ProspectSignupForm';

import productImg from '../../images/product.png';

export class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userHasInteracted: false,
			postcode: '',
			outcode: '',
			isValid: false,
			isDeliverable: false
		};
	}

	handleValidPostcode = (postcode, outcode) => {
		const isDeliverable = this.props.postcodes.indexOf(outcode) > -1;

		this.setState(prevState => {
			return {
				userHasInteracted: true,
				postcode,
				outcode,
				isValid: true,
				isDeliverable
			};
		});
	};

	handleInvalidPostcode = postcode => {
		this.setState(prevState => {
			return {
				userHasInteracted: true,
				postcode,
				outcode: '',
				isValid: false,
				isDeliverable: false
			};
		});
	};

	getParsedQueryString = () => {
		return queryString.parse(this.props.location.search);
	};

	shouldSkipValidation = () => {
		return this.getParsedQueryString().skip !== undefined ? true : false;
	};

	getInitialQty = () => {
		return this.getParsedQueryString().qty;
	};

	componentWillUpdate(nextProps, nextState) {
		if (nextState.isValid && process.env.NODE_ENV !== 'development') {
			ReactGA.event({
				category: 'Postcode',
				action: nextState.isDeliverable ? 'deliverable' : 'undeliverable',
				label: nextState.outcode
			});
		}
	}

	render() {
		return (
			<div className="section product-section">
				<div className="grid">
					<div className="col sm-11 sm-push-1 md-6 md-push-0 lg-5 lg-push-1">
						<img src={productImg} />
					</div>

					<div className="col fluid md-6 lg-5">
						<h1 style={{ marginTop: 0 }}>FABIO'S Artisan FRESH PASTA</h1>

						{this.props.soldout && (
							<div>
								<p>
								Crafted without any preservatives or additives, Fabio’s fresh pasta is another example of Houstonians championing the real food revolution.{' '}
									<a href="https://medium.com/@OiDonaRita/time-to-say-goodbye-e56803c3f084">
										read more
									</a>
									.
								</p>
								<p className="postcode-message">
									If you really need some Pao de Queijo in your life, Rita might be able
									to offer a catering option. You can contact her at{' '}
									<a href="mailto:ritaduarte@hotmail.co.uk">ritaduarte@hotmail.co.uk</a>.
								</p>
							</div>
						)}

						{!this.props.soldout && (
							<div className="postcode" id="postcode-holder">
								<p className="small">
									We're a small family business and we only deliver in certain postcodes.
									Enter your postcode below and let's hope we can deliver to you.
								</p>

								{!this.state.isDeliverable && !this.shouldSkipValidation() && (
									<PostcodeValidator
										onValidPostcode={this.handleValidPostcode}
										onInvalidPostcode={this.handleInvalidPostcode}
									/>
								)}

								{(this.state.isDeliverable || this.shouldSkipValidation()) && (
									<ProductHolder initialQty={this.getInitialQty()} />
								)}

								{!this.state.isValid && this.state.userHasInteracted && (
									<p className="postcode-message">Please enter a valid postcode.</p>
								)}

								{this.state.isValid &&
									!this.state.isDeliverable &&
									this.state.userHasInteracted && (
										<div>
											<ShopRecommendation
												stockists={this.props.stockists}
												outcode={this.state.outcode}
											/>
											<ProspectSignupForm
												postcode={this.state.postcode}
												outcode={this.state.outcode}
											/>
										</div>
									)}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
