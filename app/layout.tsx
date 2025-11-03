import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "दीपस्तंभ पुरस्कार सोहळा २०२५ | मराठा समाज प्रतिष्ठान",
	description:
		"मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर यांचा दीपस्तंभ पुरस्कार सोहळा २०२५. १५ नोव्हेंबर २०२५ रोजी एम. आय. टी. प्रांगण, छत्रपती संभाजीनगर येथे.",
	openGraph: {
		title: "दीपस्तंभ पुरस्कार सोहळा २०२५",
		description:
			"मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर यांचा दीपस्तंभ पुरस्कार सोहळा २०२५. १५ नोव्हेंबर २०२५ रोजी एम. आय. टी. प्रांगण, छत्रपती संभाजीनगर येथे.",
		url: "https://deepstambh.com",
		images: [
			{
				url: "/images/logo.png",
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="mr" suppressHydrationWarning>
			<head>
				<link href="/css/2025.css" rel="stylesheet" />
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
				<Script src="/js/index.js" strategy="afterInteractive" />
			</head>
			<body>{children}</body>
		</html>
	);
}


