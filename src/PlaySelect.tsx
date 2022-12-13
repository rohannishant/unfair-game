import React from "react";

import "./PlaySelect.less";

export default function PlaySelect() {
	const sets = JSON.parse(localStorage.getItem("sets") as string) as {
		name: string;
		values: string[];
	}[];

	const [set, setSet] = React.useState<string | undefined>(sets[0].name);
	const [mode, setMode] = React.useState<"twoteams" | "magistra">("twoteams");

	return (
		<div id="playselect">
			<h1>Play the Unfair Game</h1>
			<form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<fieldset>
					<legend>
						<strong>Set</strong>
					</legend>
					<select
						name="set"
						id="set"
						onChange={e => {
							setSet(e.target.value);
						}}
					>
						{sets.map((s, i) => {
							return (
								<option key={i} value={s.name}>
									{s.name}
								</option>
							);
						})}
					</select>
				</fieldset>
				<br />
				<fieldset>
					<legend>
						<strong>Options</strong>
					</legend>
					<input
						type="radio"
						id="twoteams"
						name="mode"
						value="twoteams"
						onChange={() => {
							setMode("twoteams");
						}}
						checked
					/>
					<label htmlFor="twoteams">Two teams</label>
					<br />
					<input
						type="radio"
						id="magistra"
						name="mode"
						value="magistra"
						onChange={() => {
							setMode("magistra");
						}}
					/>
					<label htmlFor="magistra">vs Magistra</label>
				</fieldset>
				<br />
				<button type="submit">Play</button>
				<p>
					{set} {mode}
				</p>
			</form>
		</div>
	);
}
