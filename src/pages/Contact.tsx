import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";

function Contact() {
	document.title = "Gym and Juice | Contact";
	return (
		<div className="main">
			<CustomBreak height={3} />
			<div className="contact">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11947.554444106723!2d152.5516126992917!3d-25.25411434039839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6beb76985aeced1b%3A0x39ad29578fe29ad1!2s308%20Pacific%20Haven%20Cct%2C%20Pacific%20Haven%20QLD%204659!5e1!3m2!1sen!2sau!4v1728701392599!5m2!1sen!2sau" className="map" title="Map"></iframe>
				<div className="info">
					<h1>Contact Us</h1>
					<a href="mailto:gymnjuicewellnesscentre@gmail.com" className="btn">
						gymnjuicewellnesscentre@gmail.com
					</a>

					<h4>Address:</h4>
					<p>308 Pacific Haven Cct, Pacific Haven</p>
					<p>4659, QLD Australia</p>

					<h4>Phone Number:</h4>
					<p>(+61) 437 392 193</p>
				</div>
			</div>
			<CustomBreak height={2} />
			<GlobalFooter />
		</div>
	);
}

export default Contact;
