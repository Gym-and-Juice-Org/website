import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalNavBar from "./components/GlobalNavBar";
import Index from "./pages/Index";
import Food from "./pages/Food";
import Clothes from "./pages/Clothes";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import products from "./assets/products.json";
import NotFound from "./pages/404";
import "./assets/fonts.css";
import "./assets/main.css";

function App() {
	return (
		<div>
			<Router>
				<GlobalNavBar />
				<Switch>
					<Route exact path="/">
						<Index />
					</Route>
					<Route path="/food.html">
						<Food />
					</Route>
					<Route path="/clothes.html">
						<Clothes />
					</Route>
					<Route path="/contact.html">
						<Contact />
					</Route>
					{products.map((product) => {
						return (
							<Route path={"/" + product.pageName + ".html"}>
								<Product name={product.name} productPageDescription={product.productPageDescription} price={product.price} checkoutLink={product.checkoutLink} imgURL={product.imgURL} />
							</Route>
						);
					})}
					<Route path="/*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
