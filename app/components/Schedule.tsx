import { getElementByIdInnerHtml } from "../lib/readSection";

export function Schedule() {
	const html = getElementByIdInnerHtml("schedule");
	return <section id="schedule" dangerouslySetInnerHTML={{ __html: html }} />;
}


