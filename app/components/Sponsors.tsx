import { getElementByIdInnerHtml } from "../lib/readSection";

export function Sponsors() {
	const html = getElementByIdInnerHtml("sponsors");
	return <section id="sponsors" dangerouslySetInnerHTML={{ __html: html }} />;
}


