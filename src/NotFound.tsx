import React from "react";
import { Link } from "wouter";

import "./NotFound.less";

export default function NotFound() {
	return (
		<div id="notfound">
			<h1>Page not found :/</h1>
			<Link href="/">Back to menu</Link>
		</div>
	);
}
