import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Valio Con 2025",
	description:
		"A creative tech conference. September 11th-14th in Oceanside, California.",
	openGraph: {
		title: "Valio Con 2025",
		description:
			"A creative tech conference. September 11th-14th in Oceanside, California.",
		url: "https://valiocon.com",
		images: [
			{
				url: "https://valiocon.com/images/vcon-share-2025.jpg",
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link href="/css/2025.css%3F10.css" rel="stylesheet" />
				<link rel="icon" href="/images/favicon.ico" />
				<Script
					id="ml-universal"
					strategy="afterInteractive"
					src="https://assets.mailerlite.com/js/universal.js"
				/>
				<Script id="ml-init" strategy="afterInteractive">
					{`
(function (w, d, e, u, f, l, n) {
  (w[f] = w[f] || function () {(w[f].q = w[f].q || []).push(arguments);}),
    (l = d.createElement(e)),
    (l.async = 1),
    (l.src = u),
    (n = d.getElementsByTagName(e)[0]),
    n.parentNode.insertBefore(l, n);
})(window, document, "script", "https://assets.mailerlite.com/js/universal.js", "ml");
ml("account", "1671155");
`}
				</Script>
				<Script
					async
					id="gtag-lib"
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-HJNFY48BLB"
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-HJNFY48BLB');
`}
				</Script>
				<Script src="/js/index.js%3F4" strategy="afterInteractive" />
			</head>
			<body>{children}</body>
		</html>
	);
}


