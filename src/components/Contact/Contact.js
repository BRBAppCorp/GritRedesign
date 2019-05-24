import React from 'react';

export function Contact() {
	return (
		<div>
			<div className="grid">
				<h1 className="col md-push-1 lg-push-2">Contact us</h1>
			</div>

			<div className="grid">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					Call Us at
					<span className="contact-phone">+1 (281)-330-8004</span>
					<span className="contact-or">
						<span>or</span>
					</span>
					send us an email
					<a href="mailto:oi@donarita.co.uk" className="contact-link">
						??@gg.com
					</a>
				</p>

				<div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
					<a href="https://instagram.com/gritgrocery" className="button -block">
						Instagram
					</a>
					<a href="https://twitter.com/gritgrocery" className="button -block">
						Twitter
					</a>
					<a href="https://facebook.com/gritgrocery" className="button -block">
						Facebook
					</a>
				</div>
			</div>
		</div>
	);
}
