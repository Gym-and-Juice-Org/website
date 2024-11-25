interface ProductCardProps {
	name: string;
	description: string;
	price: number;
	productPageLink: string;
	imgURL: string;
	searchQuery: string;
}

function ProductCard({ name, description, price, productPageLink, imgURL, searchQuery }: ProductCardProps) {
	return (
		<div className="card" onClick={() => (window.location.href = productPageLink)}>
			<img src={imgURL} draggable="false" alt={name} />
			<div className="content">
				<h2 dangerouslySetInnerHTML={{ __html: selectivelyBoldText(name, searchQuery, true) }} className="h2NotBold" />
				<p>{description}</p>
				<h4 className="poppins-regular">${price}</h4>
			</div>
		</div>
	);
}

export default ProductCard;

function selectivelyBoldText(text: string, mask: string, isH2: boolean = false) {
	let boldText = "";
	mask = mask.toLowerCase();

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const shouldBold = mask.includes(char.toLowerCase());

		if (shouldBold) {
			if (isH2) {
				boldText += `<b class="h2Bold">${char}</b>`;
			} else {
				boldText += `<b>${char}</b>`;
			}
		} else {
			boldText += char;
		}
	}

	return boldText;
}
