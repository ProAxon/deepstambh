import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-content" style={{ textAlign: 'center' }}>
        <div className="footer-brand" style={{ marginBottom: '0.5rem' }}>
          दीपस्तंभ पुरस्कार सोहळा २०२५ · १५ नोव्हेंबर २०२५ ·{' '}
          <a href="https://forms.gle/7XLoKVx9DwiPKSqs5" target="_blank" rel="noopener noreferrer">
            नोंदणी करा
          </a>{' '}
          · © २०२५ मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर
        </div>
      </div>
    </footer>
  )
}

