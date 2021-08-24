import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './styles/App.scss';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<AboutUs />
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
