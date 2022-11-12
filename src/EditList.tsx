import React from "react";
import { Link, useLocation } from "wouter";

export default function EditList() {
	let sets: { name: string; values: string[] }[] = [];
	if (localStorage.getItem("sets") == null) {
		localStorage.setItem("sets", "[]");
	} else {
		sets = JSON.parse(localStorage.getItem("sets") as string);
	}

	const setLocation = useLocation()[1];

	return (
		<div id="editlist">
			<h1>Your sets</h1>
			<Link href="/">Back to menu</Link>
			<ul>
				{sets.map(set => (
					<li>
						<Link href={`/edit/${set.name}`}>{set.name}</Link>
					</li>
				))}
				<li>
					<button
						onClick={() => {
							let name = "Untitled Set";
							for (
								let i = 2;
								sets.filter(set => set.name == name).length > 0;
								i++
							) {
								name = `Untitled Set ${i}`;
							}
							sets.push({ name: name, values: [] });
							localStorage.setItem("sets", JSON.stringify(sets));
							setLocation(`/edit/${name}`);
						}}
					>
						Create new set
					</button>
				</li>
			</ul>
		</div>
	);
}
