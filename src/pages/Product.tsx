import CustomBreak from "../components/CustomBreak";

interface ProductProps {
	name: string;
	productPageDescription: string;
	price: number;
	checkoutLink: string;
	imgURL: string;
}

function Product({ name, productPageDescription, price, checkoutLink, imgURL }: ProductProps) {
	return (
		<>
			<CustomBreak height={2} />
			<img src={imgURL} className="productPageImage" />
			<div className="productPageImageOverlay">
				<div className="productPageImageContent">
					<h1>{name}</h1>
					<p>{productPageDescription}</p>
				</div>
				<div className="buyDiv" onClick={() => window.open(checkoutLink)}>
					<p>${price}</p>
					<button>Buy</button>
				</div>
				<CustomBreak height={100000} />
			</div>
		</>
	);
}

export default Product;
