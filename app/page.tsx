import fs from "node:fs";
import path from "node:path";

function getBodyHtml(): string {
	const htmlPath = path.join(process.cwd(), "public", "index-raw.html");
	let raw = "";
	try {
		raw = fs.readFileSync(htmlPath, "utf8");
	} catch {
		return "";
	}
	const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
	return bodyMatch ? bodyMatch[1] : raw;
}

export default function Page() {
	const body = getBodyHtml();
	return (
		<main
			suppressHydrationWarning
			dangerouslySetInnerHTML={{ __html: body }}
		/>
	);
}


