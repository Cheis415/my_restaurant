import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<div className="brand">
				<a href="#" className="logo">
					<i className="fas fa-utensils"></i>
				</a>
				<div>
					<h1 className="main-name">Heisler's</h1>
					<p className="sub-name">Restaurants</p>
				</div>
			</div>
			<div className="header-banner">
				<h1 className="main-heading">Welcome!</h1>
				<h3 className="sub-heading">Try Chad's Favorites,</h3>
				<h3 className="sub-heading">With Chad!</h3>
			</div>
		</header>
	);
};

export default Header;
