import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/App.scss';

function App() {
	const [displayModal, setDisplayModal] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const handleClick = (index) => {
		setDisplayModal((prevState) =>
			prevState.map((item, idx) => (idx === index ? !item : item))
		);
	};
	//   const HanldeCheck = (index) => {
	//     setcheckBoxState(prevState => prevState.map((item, idx) => idx === index ? !item : item))
	// };

	return (
		<>
			<Navbar />
			<Header />
			<AboutUs />
			<Gallery displayModal={displayModal} handleClick={handleClick} />
			<Footer />
		</>
	);
}

export default App;
