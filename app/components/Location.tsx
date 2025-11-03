import { getElementByIdInnerHtml } from "../lib/readSection";

export function Location() {
	const html = getElementByIdInnerHtml("location");
	return <section id="location" dangerouslySetInnerHTML={{ __html: html }} />;
}


