import GlobalFooter from "../components/GlobalFooter";
import logo from "../assets/img/logo.png";

function NotFound() {
	document.title = "Gym and Juice | 404";
	return (
		<div className="main">
			<div className="errorPageContent">
				<img src={logo} width="133px" height="200px" alt="Logo" />
				<h1 className="title">404</h1>
				<p className="h2NotBold" style={{ textAlign: "center" }}>
					Page Not Found
				</p>
			</div>
			<GlobalFooter bottom={true} />
		</div>
	);
}

export default NotFound;
