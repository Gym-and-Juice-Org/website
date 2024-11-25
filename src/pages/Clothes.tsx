import { useState } from "react";
import CustomBreak from "../components/CustomBreak";
import product from "../assets/products.json";
import ProductCard from "../components/ProductCard";
import GlobalFooter from "../components/GlobalFooter";

function Clothes() {
	const [searchQuery, setSearchQuery] = useState("");
	document.title = "Gym and Juice | Clothes";
	return (
		<div className="main">
			<CustomBreak height={2} />
			<h1 className="title">Clothes</h1>
			<div className="searchBarContainer">
				<input value={searchQuery} type="text" placeholder="🔎 Search Product Name" onChange={(event) => setSearchQuery(event.target.value)} className="searchBar" />
			</div>
			<div className="cards">
				{product
					.filter((product) => {
						return product.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && product.page === "clothes";
					})
					.map((product) => {
						return <ProductCard key={product.name} name={product.name} description={product.description} price={product.price} productPageLink={"/" + product.pageName + ".html"} imgURL={product.imgURL} searchQuery={searchQuery} />;
					})}
			</div>
			<GlobalFooter />
		</div>
	);
}

export default Clothes;
