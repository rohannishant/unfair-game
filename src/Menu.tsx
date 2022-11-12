import React from "react";
import { useLocation } from "wouter";

export default function Menu() {
	const setLocation = useLocation()[1];

	return (
		<div id="menu">
			<h1>Unfair Game</h1>
			<p>
				<i>by Rohan Nishant</i>
			</p>
			<button
				className="menu-button"
				onClick={() => {
					setLocation("/play");
				}}
			>
				Play
			</button>
			<button
				className="menu-button"
				onClick={() => {
					setLocation("/edit");
				}}
			>
				Edit
			</button>
		</div>
	);
}
