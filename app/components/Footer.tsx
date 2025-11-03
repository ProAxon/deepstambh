import { getElementByIdInnerHtml } from "../lib/readSection";

export function Footer() {
	const html = getElementByIdInnerHtml("footer");
	return <footer dangerouslySetInnerHTML={{ __html: html }} />;
}


