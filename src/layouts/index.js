import React from 'react';
// import ReactGA from 'react-ga';

import { Nav } from '../components/Nav/Nav';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import '../_sass/index.scss';

export default class Layout extends React.Component {
	// componentDidMount() {
		// const { location } = this.props;
		// ReactGA.initialize('UA-88250609-1');
		// ReactGA.pageview(location.pathname + location.search);
	// }

	// componentDidUpdate() {
		// const { location } = this.props;
		// ReactGA.pageview(location.pathname + location.search);
	// }

	render() {
		const { children } = this.props;
		return (
			<div>
				<Nav />
				{children}
				<Section>
					<Contact />
				</Section>
			</div>
		);
	}
}
