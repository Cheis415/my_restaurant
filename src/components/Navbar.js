import React from 'react';
import '../styles/App.scss';
import navPic1 from '../images/nav-img-1.jpeg';
import navPic2 from '../images/nav-img-2.jpeg';
import navPic3 from '../images/nav-img-3.jpeg';
const Navbar = () => {
	return (
		<nav className="navbar">
			<input type="checkbox" id="check" className="checkbox" hidden />
			<div className="hamburger-menu">
				<label for="check" className="menu">
					<div className="menu-line menu-line-1"></div>
					<div className="menu-line menu-line-2"></div>
					<div className="menu-line menu-line-3"></div>
				</label>
			</div>

			<div className="navbar-navigation">
				<div className="navbar-navigation-left">
					<img
						src={navPic1}
						className="left-img left-img-1"
						alt="waiter with two plates of food"
					/>
					<img
						src={navPic2}
						className="left-img left-img-2"
						alt="hanging open sign"
					/>
					<img
						src={navPic3}
						className="left-img left-img-3"
						alt="a bunch of wine glasses"
					/>
				</div>
				<div className="navbar-navigation-right">
					<ul className="nav-list">
						<li className="nav-list-item">
							<button className="nav-list-link">These</button>
						</li>
						<li className="nav-list-item">
							<button className="nav-list-link">Links</button>
						</li>
						<li className="nav-list-item">
							<button className="nav-list-link">Don't</button>
						</li>
						<li className="nav-list-item">
							<button className="nav-list-link">Actually</button>
						</li>
						<li className="nav-list-item">
							<button className="nav-list-link">Go</button>
						</li>
						<li className="nav-list-item">
							<button className="nav-list-link">Anywhere</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
