import CustomBreak from "../components/CustomBreak";
import GlobalFooter from "../components/GlobalFooter";

interface ProductProps {
	name: string;
	productPageDescription: string;
	price: number;
	checkoutLink: string;
	imgURL: string;
}

function Product({ name, productPageDescription, price, checkoutLink, imgURL }: ProductProps) {
	// Set the page title
	document.title = "Gym and Juice | " + name;
	return (
		<>
			<CustomBreak height={2} />
			<img src={imgURL} className="productPageImage" alt={name} />
			<div className="productPageImageOverlay">
				<div className="productPageImageContent">
					<h1>{name}</h1>
					<p>{productPageDescription}</p>
				</div>
				<div className="buyDiv" onClick={() => window.open(checkoutLink)}>
					<p>${price}</p>
					<button>Buy</button>
				</div>
			</div>
			<GlobalFooter />
		</>
	);
}

export default Product;
