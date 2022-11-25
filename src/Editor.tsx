import React from "react";
import { useRoute } from "wouter";

import "./Editor.less";

interface Set {
	name: string;
	values: string[];
}

export default function Editor() {
	const nameParam = useRoute("/edit/:name")[1]?.name as string;

	if (localStorage.getItem("sets") == null) {
		localStorage.setItem("sets", "[]");
	}
	const [sets, setSets] = React.useState(
		JSON.parse(localStorage.getItem("sets") as string) as Set[]
	);
	const [set, setSet] = React.useState(
		sets.filter(set => set.name == nameParam)[0]
	);

	React.useEffect(() => {
		setSets(sets.filter(s => s.name != set.name).concat(set));
	}, [set]);
	React.useEffect(() => {
		localStorage.setItem("sets", JSON.stringify(sets));
	}, [sets]);

	return (
		<div id="editor">
			<h1>{set.name}</h1>
			<ul>
				{set.values.map((v, i) => (
					<li key={i}>
						<input
							value={v}
							onChange={e => {
								const newValues = set.values;
								newValues[i] = e.target.value;
								setSet({
									name: set.name,
									values: newValues
								});
							}}
						></input>
						<button
							onClick={() => {
								setSet({
									name: set.name,
									values: set.values.filter(s => s != v)
								});
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					if (set.values.length < 1 || set.values[set.values.length - 1]) {
						setSet({ name: set.name, values: set.values.concat("") });
					}
				}}
			>
				Add item
			</button>
			<p>{JSON.stringify(set)}</p>
		</div>
	);
}
