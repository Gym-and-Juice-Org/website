import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function GlobalNavBar() {
	return (
		<nav>
			<div className="navContent">
				<ul className="navList">
					<a href="/" className="navLink">
						<img src={logo} alt="Logo" />
					</a>
					<Link to="/shop.html" className="navLink">
						Shop
					</Link>
					<Link to="/food.html" className="navLink">
						Food
					</Link>
					<Link to="/clothes.html" className="navLink">
						Clothes
					</Link>
					<Link to="/contact.html" className="navLink">
						Contact
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default GlobalNavBar;
