import React from 'react';
import About from '../_sections/about';
import Description from '../_sections/description';
import Hero from '../_sections/hero';
import { Footer } from '../_sections/footer';
import Portfolio from '../_sections/portfolio';
import PriceSection from '../_sections/price';
import Contact from '../_sections/contact';

const LandingPage = () => {
	return (
		<div className="">
			<Hero  />
			<About/>
			<Description/>
			<Portfolio />
			<Contact/>
			<PriceSection />
			<Footer />
		</div>
	);
};

export default LandingPage;
