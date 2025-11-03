import { getElementByIdInnerHtml } from "../lib/readSection";

export function Hero() {
	const html = getElementByIdInnerHtml("hero");
	return <section id="hero" dangerouslySetInnerHTML={{ __html: html }} />;
}


