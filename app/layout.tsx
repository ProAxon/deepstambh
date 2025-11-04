import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Tokyo Design Forum 2026',
  description: 'Where human creativity meets intelligent systems. Tokyo. February 2026.',
  generator: 'Next.js',
  openGraph: {
    title: 'Tokyo Design Forum 2026',
    description: 'Where human creativity meets intelligent systems. Tokyo. February 2026.',
    url: 'https://tokyodesignforum.com',
    siteName: 'Tokyo Design Forum',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.tokyodesignforum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tokyo Design Forum - A Design & Product Conference',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokyo Design Forum 2026',
    description: 'Where human creativity meets intelligent systems. Tokyo. February 2026.',
    images: ['https://www.tokyodesignforum.com/og-image.jpg'],
  },
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#fff', minHeight: '100vh' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NEV17B6ZSH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NEV17B6ZSH');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}

