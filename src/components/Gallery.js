import React from 'react';
import galleryPic1 from '../images/la-taqueria.jpeg';
import galleryPic2 from '../images/toastpolk.jpeg';
import galleryPic3 from '../images/square-pie-guys.jpeg';
import galleryPic4 from '../images/beeps.jpeg';
import galleryPic5 from '../images/trouble.jpeg';
import galleryPic6 from '../images/arizmendi.jpeg';
import Modal from './Modal';

const Gallery = ({ displayModal, handleClick }) => {
	return (
		<section className="gallery">
			<div className="cards-wrapper">
				{displayModal[0] === true && (
					<Modal
						idx={0}
						handleClick={handleClick}
						title="La Taqueria"
						body="Are these the best tacos EVER? I like to think so. Especially the crispy chorizo tacos. Always a line, but always worth it"
					/>
				)}
				{displayModal[1] === true && (
					<Modal
						idx={1}
						handleClick={handleClick}
						title="Toast Eatery"
						body='Delicious breakfast place! They have an item on their menu called "hashbrown hill" and it is not only amazingly good, but good for you...jk, but it is tasty!'
					/>
				)}
				{displayModal[2] === true && (
					<Modal
						idx={2}
						handleClick={handleClick}
						title="Square Pie Guys"
						body="Man I love this place! Their crust is amazing and the ingredients are always fresh. It is a new favorite for me but definitely a favorite"
					/>
				)}
				{displayModal[3] === true && (
					<Modal
						idx={3}
						handleClick={handleClick}
						title="Beeps Burgers"
						body="Beeps, oh Beeps. Such an incredible burger! Their Beeps sauce is lip smacking and their jalapeno poppers are a must."
					/>
				)}
				{displayModal[4] === true && (
					<Modal
						idx={4}
						handleClick={handleClick}
						title="Trouble Coffee"
						body="When I lived in the outer sunset I was lucky enough to live just a block away from this amazing coffee shop. Again there is often a line, but not only can we get a tasty coffee, but also an amazing slice of toast with some great toppings."
					/>
				)}
				{displayModal[5] === true && (
					<Modal
						idx={5}
						handleClick={handleClick}
						title="Arizmendi"
						body="What can I say about Arizmendi that hasn't already been said? I don't know, but focaccia, scones, bread, cookies, pizza and more are baked to perfection. Let's gooo!"
					/>
				)}
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">For Tacos</h1>
						<p className="card-overlay-paragraph">5 Stars</p>
						<button
							onClick={() => handleClick(0)}
							type="button"
							className="card-overlay-btn"
						>
							Learn More
						</button>
					</div>
					<img src={galleryPic1} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Breakfast</h1>
						<p className="card-overlay-paragraph">4 Stars</p>
						<button
							onClick={() => handleClick(1)}
							type="button"
							className="card-overlay-btn"
						>
							Learn More
						</button>
					</div>
					<img src={galleryPic2} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Pizza</h1>
						<p className="card-overlay-paragraph">4 Stars</p>
						<button
							onClick={() => handleClick(2)}
							type="button"
							className="card-overlay-btn"
						>
							Learn More
						</button>
					</div>
					<img src={galleryPic3} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Burgers</h1>
						<p className="card-overlay-paragraph">4 Stars</p>
						<button
							onClick={() => handleClick(3)}
							type="button"
							className="card-overlay-btn"
						>
							Learn More
						</button>
					</div>
					<img src={galleryPic4} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Coffee</h1>
						<p className="card-overlay-paragraph">5 Stars</p>
						<button
							onClick={() => handleClick(4)}
							type="button"
							className="card-overlay-btn"
						>
							Learn More
						</button>
					</div>
					<img src={galleryPic5} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Bakery</h1>
						<p className="card-overlay-paragraph">5 Stars</p>
						<button
							onClick={() => handleClick(5)}
							type="button"
							className="card-overlay-btn"
						>
							Learn More
						</button>
					</div>
					<img src={galleryPic6} className="card-image" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Gallery;
