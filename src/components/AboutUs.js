import React from 'react';
import workLunchPic from '../images/work-lunch.jpg';

const AboutUs = () => {
	return (
		<section className="about-us">
			<div className="about-us-left">
				<img src={workLunchPic} alt="group of people eating together" />
			</div>
			<div className="about-us-right">
				<h1 className="main-heading">About Me</h1>
				<h3 className="sub-heading">I love food and code!</h3>
				<div className="stars">
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
				</div>
				<p className="description">
					Is this just something for me to put on my portfolio? Well, yes, but
					that's not all. It is meant to showcase my Front End skills, and to
					entice you to come with me to one of my favorite places and get a bite
					or drink. I am always looking to meet new and interesting people.
					Scroll down and pick a place if you are game!
				</p>
				<div className="stars">
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
				</div>
				<button type="button" className="main-btn">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.chadheisler.com/"
					>
						portfolio
					</a>
				</button>
			</div>
		</section>
	);
};

export default AboutUs;
