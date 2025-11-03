import { getElementByIdInnerHtml } from "../lib/readSection";

export function Speakers() {
	const html = getElementByIdInnerHtml("speakers");
	return <section id="speakers" dangerouslySetInnerHTML={{ __html: html }} />;
}


