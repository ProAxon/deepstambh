import fs from "node:fs";
import path from "node:path";

const RAW_PATH = path.join(process.cwd(), "public", "index-raw.html");

function readRawHtml(): string {
	try {
		return fs.readFileSync(RAW_PATH, "utf8");
	} catch {
		return "";
	}
}

export function getBodyInnerHtml(): string {
	const raw = readRawHtml();
	const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
	return bodyMatch ? bodyMatch[1] : raw;
}

export function getElementByIdInnerHtml(id: string): string {
	const body = getBodyInnerHtml();
	// Rough extraction of a block starting with id="..." (section, header, footer, div)
	const pattern = new RegExp(
		`<(section|header|footer|div)[^>]*id=["']${id}["'][^>]*>([\\s\\S]*?)<\\/(?:section|header|footer|div)>`,
		"i"
	);
	const match = body.match(pattern);
	return match ? match[2] : "";
}


