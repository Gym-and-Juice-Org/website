import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";

function Contact() {
	document.title = "Gym and Juice | Contact";
	return (
		<div className="main">
			<CustomBreak height={3} />
			<div className="contact">
				<div className="info">
					<h1>Contact Us</h1>
					<a href="mailto:gymnjuicewellnesscentre@gmail.com" className="btn">
						gymnjuicewellnesscentre@gmail.com
					</a>

					<h4>Address:</h4>
					<p>Pacific Haven Cct, Pacific Haven</p>
					<p>4659, QLD Australia</p>
				</div>
			</div>
			<CustomBreak height={2} />
			<GlobalFooter bottom={true} />
		</div>
	);
}

export default Contact;
