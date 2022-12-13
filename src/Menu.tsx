import React from "react";
import { useLocation } from "wouter";

import "./Menu.less";

export default function Menu() {
	const setLocation = useLocation()[1];

	const playable =
		localStorage.getItem("sets") != undefined &&
		(JSON.parse(localStorage.getItem("sets") as string) as []).length > 0;

	return (
		<div id="menu">
			<h1>Unfair Game</h1>
			<p>
				<i>by Rohan Nishant</i>
			</p>
			<button
				onClick={() => {
					setLocation("/play");
				}}
				disabled={!playable}
				title={playable ? "Click to play!" : "Create some sets first."}
			>
				Play
			</button>
			<button
				onClick={() => {
					setLocation("/edit");
				}}
			>
				Edit
			</button>
		</div>
	);
}
