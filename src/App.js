import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import NotFoundPage from "./components/NotFoundPage";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" render={(props) => <About {...props} />} />
					<Route
						exact
						path="/contact"
						render={(props) => <Contact {...props} />}
					/>
					<Route
						exact
						path="/portfolio"
						render={(props) => <Portfolio {...props} />}
					/>
					<Route render={(props) => <NotFoundPage {...props} />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
