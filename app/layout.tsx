import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'दीपस्तंभ पुरस्कार सोहळा | मराठा समाज प्रतिष्ठान',
  description: 'मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर यांचा दीपस्तंभ पुरस्कार सोहळा २०२५. १५ नोव्हेंबर २०२५ रोजी एम. आय. टी. प्रांगण, छत्रपती संभाजीनगर येथे.',
  generator: 'Next.js',
  openGraph: {
    title: 'दीपस्तंभ पुरस्कार सोहळा २०२५',
    description: 'मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर यांचा दीपस्तंभ पुरस्कार सोहळा २०२५. १५ नोव्हेंबर २०२५ रोजी एम. आय. टी. प्रांगण, छत्रपती संभाजीनगर येथे.',
    url: 'https://deepstambh.marathasamajpratishthan.org',
    siteName: 'दीपस्तंभ पुरस्कार सोहळा',
    locale: 'mr_IN',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'दीपस्तंभ पुरस्कार सोहळा २०२५ - मराठा समाज प्रतिष्ठान',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'दीपस्तंभ पुरस्कार सोहळा २०२५',
    description: 'मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर यांचा दीपस्तंभ पुरस्कार सोहळा २०२५. १५ नोव्हेंबर २०२५ रोजी एम. आय. टी. प्रांगण, छत्रपती संभाजीनगर येथे.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr">
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

