import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<div className="brand">
				<a href="#" className="logo">
					<i className="fas fa-utensils"></i>
				</a>
				<div>
					<h1 className="main-name">Heisler</h1>
					<p className="sub-name">Restaurant</p>
				</div>
			</div>
			<div className="header-banner">
				<h1 className="main-heading">Welcome!</h1>
				<h3 className="sub-heading">Try Chads Favorites</h3>
				<button type="button" className="main-btn">
					Reservation
				</button>
			</div>
		</header>
	);
};

export default Header;
