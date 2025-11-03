import { getElementByIdInnerHtml } from "../lib/readSection";

export function VideoOverlay() {
	const html = getElementByIdInnerHtml("video");
	return <div id="video" dangerouslySetInnerHTML={{ __html: html }} />;
}


