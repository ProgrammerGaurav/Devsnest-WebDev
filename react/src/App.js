import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Day16 from "./components/day16";
import Day17 from "./components/day17";
import Day18 from "./components/day18";
import Day19 from "./components/day19";
import Day20 from "./components/day20";
import Day21 from "./components/day21";
import Day26 from "./components/day26";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/day16">
					<Day16 />
				</Route>
				<Route exact path="/day17">
					<Day17 />
				</Route>
				<Route exact path="/day18">
					<Day18 />
				</Route>
				<Route exact path="/day19">
					<Day19 />
				</Route>
				<Route exact path="/day20">
					<Day20 />
				</Route>
				<Route exact path="/day21">
					<Day21 />
				</Route>
				<Route exact path="/day26">
					<Day26 />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
