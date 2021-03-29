import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path={"/"}>
						<About />
					</Route>
					<Route exact path={"/contact"}>
						<Contact />
					</Route>
					<Route exact path={"/portfolio"}>
						<Portfolio />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
