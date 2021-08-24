import React from 'react';
import galleryPic1 from '../images/gallery-img-1.jpeg';
import galleryPic2 from '../images/gallery-img-2.jpeg';
import galleryPic3 from '../images/gallery-img-3.jpeg';
import galleryPic4 from '../images/gallery-img-4.jpeg';
import galleryPic5 from '../images/gallery-img-5.jpeg';
import galleryPic6 from '../images/gallery-img-6.jpeg';

const Gallery = () => {
	return (
		<section className="gallery">
			<div className="cards-wrapper">
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Food Name</h1>
						<p className="card-overlay-paragraph">Price: $30.00</p>
						<button type="button" className="card-overlay-btn">
							Order Now
						</button>
					</div>
					<img src={galleryPic1} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Food Name</h1>
						<p className="card-overlay-paragraph">Price: $30.00</p>
						<button type="button" className="card-overlay-btn">
							Order Now
						</button>
					</div>
					<img src={galleryPic2} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Food Name</h1>
						<p className="card-overlay-paragraph">Price: $30.00</p>
						<button type="button" className="card-overlay-btn">
							Order Now
						</button>
					</div>
					<img src={galleryPic3} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Food Name</h1>
						<p className="card-overlay-paragraph">Price: $30.00</p>
						<button type="button" className="card-overlay-btn">
							Order Now
						</button>
					</div>
					<img src={galleryPic4} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Food Name</h1>
						<p className="card-overlay-paragraph">Price: $30.00</p>
						<button type="button" className="card-overlay-btn">
							Order Now
						</button>
					</div>
					<img src={galleryPic5} className="card-image" alt="" />
				</div>
				<div className="card">
					<div className="card-overlay">
						<h1 className="card-overlay-heading">Food Name</h1>
						<p className="card-overlay-paragraph">Price: $30.00</p>
						<button type="button" className="card-overlay-btn">
							Order Now
						</button>
					</div>
					<img src={galleryPic6} className="card-image" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Gallery;
