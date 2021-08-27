import React from 'react';
import resume from '../images/ChadHeislerJulyResume.pdf';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-header">
				<button className="logo">
					<i className="fas fa-utensils"></i>
				</button>
				<div>
					<h1 className="main-name">Heisler's</h1>
					<p className="sub-name">Restaurants</p>
				</div>
			</div>

			<div className="footer-social-media">
				<ul className="social-media">
					<li className="social-media-item">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/Cheis415/"
							className="social-media-link"
						>
							<i className="fab fa-github"></i>
						</a>
					</li>
					<li className="social-media-item">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/chad-heisler/"
							className="social-media-link"
						>
							<i className="fab fa-linkedin"></i>
						</a>
					</li>
					<li className="social-media-item">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.chadheisler.com/"
							className="social-media-link"
						>
							<i className="fas fa-male"></i>
						</a>
					</li>
					<li className="social-media-item">
						<a
							target="_blank"
							rel="noreferrer"
							href={resume}
							className="social-media-link"
						>
							<i className="fas fa-file"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-copyright">
				<p className="footer-copyright-paragraph">
					&copy; Copyright. Restaurant "Heisler's". All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
