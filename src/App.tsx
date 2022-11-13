import React from "react";
import { Route, Switch } from "wouter";
import Menu from "./Menu";
import EditList from "./EditList";
import NotFound from "./NotFound";

export default function App() {
	return (
		<>
			<Switch>
				<Route path="/">
					<Menu />
				</Route>
				<Route path="/edit">
					<EditList />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}
