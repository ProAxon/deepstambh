import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Sponsorships - Tokyo Design Forum 2026',
  description: 'Partner with Tokyo Design Forum and connect with the global design community in Tokyo.',
}

export default function SponsorshipsPage() {
  return (
    <div className="sponsorships-page">
      <Nav />
      <header className="sponsorships-header">
        <h1>Tokyo Design Forum 2026 Sponsorships</h1>
        <p className="header-subtitle-small">
          Sponsor Tokyo Design Forum and get your brand in front of the world's leading designers, builders, and creative technologists.
        </p>
        <a href="mailto:hello@tokyodesignforum.com?subject=Sponsorship Inquiry" className="btn-primary">
          Contact Us About Sponsoring
        </a>
      </header>
      <main className="sponsorships-content">
        <section className="content-section">
          <h2>About Tokyo Design Forum</h2>
          <p>
            Tokyo Design Forum is a small, independent gathering for designers, founders, and builders shaping the future of design and technology.
          </p>
          <p>
            Taking place February 16–18, 2026 in Shibuya, it's intentionally intimate—around 50 attendees—focused on real conversations, not big stages.
          </p>
          <p>
            The forum brings together voices from Japan and abroad to explore how craft, systems-thinking, and entrepreneurship intersect in the age of AI. Expect meaningful talks, honest discussions, and experiences that connect design culture in the East and West.
          </p>
        </section>

        <section className="content-section">
          <h2>Sponsorship Packages</h2>
          
          <div className="package">
            <div className="package-header">
              <div>
                <h3>Custom Sponsorship — $3k and up</h3>
                <span className="status-badge open">OPEN</span>
              </div>
              <a href="mailto:hello@tokyodesignforum.com?subject=Custom Sponsorship Inquiry" className="btn-secondary">
                Contact Us
              </a>
            </div>
            <p>Let's create something unique together. This is our most common option.</p>
            <ul>
              <li>Custom branded activations or creative experiences</li>
              <li>Product tie-ins or launch integrations</li>
              <li>Tailored ideas to fit your brand and goals</li>
            </ul>
          </div>

          <div className="package">
            <div className="package-header">
              <div>
                <h3>Stage Banner — $4k</h3>
                <span className="status-badge open">OPEN</span>
              </div>
              <a href="mailto:hello@tokyodesignforum.com?subject=Stage Banner Sponsorship Inquiry" className="btn-secondary">
                Contact Us
              </a>
            </div>
            <p>Your logo placed inside the main conference hall.</p>
            <ul>
              <li>Prominent visibility during talks</li>
              <li>Continuous exposure throughout the event</li>
            </ul>
          </div>

          <div className="package">
            <div className="package-header">
              <div>
                <h3>Badge Sponsor — $6k</h3>
                <span className="status-badge open">OPEN</span>
              </div>
              <a href="mailto:hello@tokyodesignforum.com?subject=Badge Sponsor Inquiry" className="btn-secondary">
                Contact Us
              </a>
            </div>
            <p>Your logo featured on every attendee badge.</p>
            <ul>
              <li>Seen and photographed throughout the event</li>
              <li>Premium placement alongside event branding</li>
            </ul>
          </div>

          <div className="package">
            <div className="package-header">
              <div>
                <h3>Giveaway Sponsor — $1k</h3>
                <span className="status-badge open">OPEN</span>
              </div>
              <a href="mailto:hello@tokyodesignforum.com?subject=Giveaway Sponsor Inquiry" className="btn-secondary">
                Contact Us
              </a>
            </div>
            <p>Recognition during daily giveaways.</p>
            <ul>
              <li>On-stage thank-you mention</li>
              <li>Logo displayed on screen</li>
              <li>Tag in official event post with winner photo</li>
            </ul>
          </div>
        </section>

        <section className="content-section acknowledgment-section">
          <h2>Making Year One Possible</h2>
          <p>
            This is the first Tokyo Design Forum, and we're grateful to our sponsors for helping us make it happen. We've partnered with Drew Wilson, who has successfully run{' '}
            <a href="https://valiocon.com" target="_blank" rel="noopener noreferrer">
              Valio Con
            </a>{' '}
            for multiple years in San Diego, California. Together, we're bringing that same energy and community spirit to Tokyo.
          </p>
        </section>

        <section className="content-section cta-section">
          <h2>Let's Create Something Special</h2>
          <p>
            We're committed to creating sponsorship experiences that deliver real value for your brand while enhancing the conference for our attendees. Let's talk about how we can work together.
          </p>
          <div className="cta-buttons">
            <a href="mailto:hello@tokyodesignforum.com?subject=Sponsorship Inquiry" className="btn-primary">
              Email Us
            </a>
            <a href="https://x.com/forum_tokyo" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow on X →
            </a>
          </div>
        </section>
      </main>
      <footer className="sponsorships-footer">
        <p>© 2026 Tokyo Design Forum. All rights reserved.</p>
        <Link href="/">Back to home</Link>
      </footer>
    </div>
  )
}

