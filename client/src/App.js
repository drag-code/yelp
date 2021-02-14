import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import UpdatePage from "./routes/UpdatePage";

function App() {
	return (
		<div className="container">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/restaurant/:id" component={Details} />
					<Route exact path="/restaurant/:id/update" component={UpdatePage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
