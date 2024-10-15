import CustomBreak from "../components/CustomBreak";
import hero from "../assets/hero.mp4";
import GlobalFooter from "../components/GlobalFooter";
import "../assets/main.css";

function Index() {
	return (
		<div className="main">
			<section className="hero">
				<video autoPlay muted loop playsInline className="heroVideo">
					<source src={hero} type="video/mp4" />
				</video>
				<div className="heroOverlay">
					<div className="heroContent">
						<h1>Gym and Juice</h1>
						<p>Get Fit and Stay Fit!</p>
						<a href="shop.html" className="btn">
							Shop
						</a>
					</div>
				</div>
			</section>
			<CustomBreak height={1} />
			<GlobalFooter />
		</div>
	);
}

export default Index;
