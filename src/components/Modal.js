import React from 'react';

const Modal = ({ title, body, handleClick, idx }) => {
	return (
		<div className="Modal">
			<div className="Modal-body">
				<h1 className="Modal-body-title">{title}</h1>
				<div className="stars">
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
				</div>
				<p>{body}</p>
				<div className="stars">
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
					<i className="fas fa-star-of-life star"></i>
				</div>
				<div className="btn-container">
					<button
						onClick={() => handleClick(idx)}
						type="button"
						className="main-btn"
					>
						Back
					</button>
					<button type="button" className="main-btn">
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.linkedin.com/in/chad-heisler/"
						>
							connect
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
