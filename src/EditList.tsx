import React from "react";
import { Link } from "wouter";

import "./EditList.less";

export default function EditList() {
	if (localStorage.getItem("sets") == null) {
		localStorage.setItem("sets", "[]");
	}
	const [sets, setSets] = React.useState(
		JSON.parse(localStorage.getItem("sets") as string) as {
			name: string;
			values: string[];
		}[]
	);
	React.useEffect(() => {
		localStorage.setItem("sets", JSON.stringify(sets));
	});

	const [setName, setSetName] = React.useState("");

	return (
		<div id="editlist">
			<h1>Your sets</h1>
			<Link href="/">Back to menu</Link>
			<ul>
				{sets.map((set, i) => (
					<li key={i}>
						<Link href={`/edit/${set.name}`}>{set.name}</Link>
						<button
							onClick={() => {
								if (
									confirm(`Are you sure you want to delete set "${set.name}"?`)
								) {
									setSets(sets.filter(s => s.name != set.name));
								}
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (sets.filter(set => set.name == setName).length > 0) {
						alert(`Set with name "${setName}" already exists`);
					} else {
						setSets(sets.concat({ name: setName, values: [] }));
						setSetName("");
					}
				}}
			>
				<fieldset>
					<legend>
						<strong>Create a new set</strong>
					</legend>
					<label htmlFor="name">Set name: </label>
					<input
						type="text"
						name="name"
						id="name"
						required
						placeholder="New set"
						value={setName}
						onChange={e => {
							setSetName(e.target.value);
						}}
					></input>
					<button type="submit">Create</button>
				</fieldset>
			</form>
		</div>
	);
}
