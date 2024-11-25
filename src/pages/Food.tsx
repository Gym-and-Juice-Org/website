import { useState } from "react";
import CustomBreak from "../components/CustomBreak";
import product from "../assets/products.json";
import ProductCard from "../components/ProductCard";
import GlobalFooter from "../components/GlobalFooter";

function Food() {
	const [searchQuery, setSearchQuery] = useState("");
	document.title = "Gym and Juice | Food";
	return (
		<div className="main">
			<CustomBreak height={3} />
			<h1 className="title">Food</h1>
			<div className="searchBarContainer">
				<input value={searchQuery} type="text" placeholder="Search..." onChange={(event) => setSearchQuery(event.target.value)} className="searchBar" />
			</div>
			<div className="cards">
				{product
					.filter((product) => {
						return product.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && product.page === "food";
					})
					.map((product) => {
						const imageUrl = product.imgURL;
						return <ProductCard key={product.name} name={product.name} description={product.description} price={product.price} productPageLink={"/" + product.pageName + ".html"} imgURL={imageUrl} searchQuery={searchQuery} />;
					})}
			</div>
			<GlobalFooter />
		</div>
	);
}

export default Food;
