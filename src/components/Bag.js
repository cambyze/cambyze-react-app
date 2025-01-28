function Bag() {
	const item1Price = 8
	const item2Price = 10
	const item3Price = 15
	return (
		<div>
			<h2>View Bag:</h2>
			<ul>
				<li>Item1 : {item1Price}€</li>
				<li>Item2 : {item2Price}€</li>
				<li>Item3 : {item3Price}€</li>
			</ul>
			Proceed to Checkout : {item1Price + item2Price + item3Price}€
		</div>
	)
}

export default Bag
