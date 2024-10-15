interface GlobalFooterProps {
	bottom?: boolean;
}

function GlobalFooter({ bottom }: GlobalFooterProps) {
	return (
		<footer className={bottom ? "bottom" : ""}>
			<p>Copyright © 2024 Gym and Juice</p>
		</footer>
	);
}

export default GlobalFooter;
