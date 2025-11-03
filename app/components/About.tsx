import { getElementByIdInnerHtml } from "../lib/readSection";

export function About() {
	const html = getElementByIdInnerHtml("about");
	return <section id="about" dangerouslySetInnerHTML={{ __html: html }} />;
}


