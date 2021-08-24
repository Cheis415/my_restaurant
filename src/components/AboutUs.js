import React from 'react';
import workLunchPic from '../images/work-lunch.jpg';

const AboutUs = () => {
	return (
		<section className="about-us">
			<div className="about-us-left">
				<img src={workLunchPic} alt="group of people eating together" />
			</div>
			<div className="about-us-right">
				<h1 className="main-heading">About Us</h1>
				<h3 className="sub-heading">Some great foods!</h3>
				<div className="stars">
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
				</div>
				<p className="description">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam.
					Autem sed iste sapiente? Veritatis ab dolorum vel! Dignissimos aliquid
					debitis doloremque sunt tempore quam praesentium est. Consequuntur,
					quo unde excepturi doloribus repellendus earum, beatae nemo voluptatem
					quaerat facere quod vel amet ipsa impedit quasi cumque laboriosam at
					delectus totam?
				</p>
				<div className="stars">
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
				</div>
				<button type="button" className="main-btn">
					Read More
				</button>
			</div>
		</section>
	);
};

export default AboutUs;
