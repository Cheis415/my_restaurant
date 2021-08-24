import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-header">
				<a href="#" className="logo">
					<i className="fas fa-utensils"></i>
				</a>
				<div>
					<h1 className="main-name">Heisler</h1>
					<p className="sub-name">Restaurant</p>
				</div>
			</div>

			<div className="footer-social-media">
				<ul className="social-media">
					<li className="social-media-item">
						<a href="#" className="social-media-link">
							<i className="fab fa-facebook-square"></i>
						</a>
					</li>
					<li className="social-media-item">
						<a href="#" className="social-media-link">
							<i className="fab fa-instagram"></i>
						</a>
					</li>
					<li className="social-media-item">
						<a href="#" className="social-media-link">
							<i className="fab fa-google-plus-square"></i>
						</a>
					</li>
					<li className="social-media-item">
						<a href="#" className="social-media-link">
							<i className="fab fa-youtube"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-copyright">
				<p className="footer-copyright-paragraph">
					&copy; Copyright. Restaurant "Heisler". All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
