import CustomBreak from "../components/CustomBreak";
import hero from "../assets/hero.mp4";
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
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<a href="food.html" className="btn">
							Lorem Ipsum.
						</a>
					</div>
				</div>
			</section>
			<CustomBreak height={1} />
		</div>
	);
}

export default Index;
