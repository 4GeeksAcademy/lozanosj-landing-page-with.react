import React from "react";

//include images into your bundle
import Navbar from "./Navbars.jsx";
import Jumbotron from "./Jumbotrons.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</>
	);
};

export default Home;
