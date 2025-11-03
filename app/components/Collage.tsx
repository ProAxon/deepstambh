import { getElementByIdInnerHtml } from "../lib/readSection";

export function Collage() {
	const html = getElementByIdInnerHtml("collage");
	return <section id="collage" dangerouslySetInnerHTML={{ __html: html }} />;
}


