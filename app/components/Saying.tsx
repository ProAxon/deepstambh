import { getElementByIdInnerHtml } from "../lib/readSection";

export function Saying() {
	const html = getElementByIdInnerHtml("w-saying");
	return <section id="w-saying" className="c-2up" dangerouslySetInnerHTML={{ __html: html }} />;
}


