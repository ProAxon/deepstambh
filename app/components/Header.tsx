import { getElementByIdInnerHtml } from "../lib/readSection";

export function Header() {
	const html = getElementByIdInnerHtml("header");
	return (
		<header id="header" className="at-top" dangerouslySetInnerHTML={{ __html: html }} />
	);
}


