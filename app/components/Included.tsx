import { getElementByIdInnerHtml } from "../lib/readSection";

export function Included() {
	const html = getElementByIdInnerHtml("w-included");
	return <section id="w-included" className="c-2up" dangerouslySetInnerHTML={{ __html: html }} />;
}


