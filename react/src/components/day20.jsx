function CalCard({ calory, food }) {
	return (
		<div className="Card">
			<h1>{food && food}</h1>
			<h2>you have consumed {calory && calory} cals today</h2>
		</div>
	);
}

function Day20() {
	return (
		<div className="day20">
			<div className="instructions">
				<h1> Instructions </h1>
				<li> build a container </li>
				<li> create a seperate function and use it as a component </li>
				<li> pass props "calory and food" and call it to main component </li>
			</div>
			<h1>Calorie Read Only</h1>

			<div className="cal-app-container">
				<CalCard calory="56" food="Pizza" />
				<CalCard calory="69" food="Burger" />
				<CalCard calory="500" food="Coke" />
				<CalCard calory="180" food="Browne" />
				<CalCard calory="90" food="Fried Rice" />
				<CalCard calory="200" food="Lassania" />
				<CalCard calory="10" food="Pani Puri" />
			</div>
		</div>
	);
}
export default Day20;
