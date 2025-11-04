import Image from 'next/image'

const speakers = [
  {
    name: 'Tejrao Bargal',
    title: 'VP of Design, Adobe',
    bio: 'Ex-Dropbox, Frame.io. Product design leader.',
    image: '/Tejrao-Bargal.png',
    badge: 'awardee',
  },
  {
    name: 'Nakul Bhonsle',
    title: 'VP of Design, Adobe',
    bio: 'Ex-Dropbox, Frame.io. Product design leader.',
    image: '/Nakul-Bhonsle.png',
    badge: 'awardee',
  },
  {
    name: 'Baiju Patil',
    title: 'VP of Design, Adobe',
    bio: 'Ex-Dropbox, Frame.io. Product design leader.',
    image: '/Baiju-Patil.png',
    badge: 'awardee',
  },
  {
    name: 'CA Ashok Patil',
    title: 'VP of Design, Adobe',
    bio: 'Ex-Dropbox, Frame.io. Product design leader.',
    image: '/CA-Ashok-Patil-Sir.png',
    badge: 'awardee',
  },
  {
    name: 'Dr Pravin Suryavanshi',
    title: 'VP of Design, Adobe',
    bio: 'Ex-Dropbox, Frame.io. Product design leader.',
    image: '/Dr-Pravin–Suryavanshi.png',
    badge: 'awardee',
  },
  {
    name: 'Padmakar Mule',
    title: 'VP of Design, Adobe',
    bio: 'Ex-Dropbox, Frame.io. Product design leader.',
    image: '/Padmakar-Mule.png',
    badge: 'awardee',
  },

]

export default function SpeakersSection() {
  return (
    <section className="speakers-section" id="speakers">
      <div className="speakers-header">
        <div className="eyebrow">पुरस्कार विजेते</div>
        <h2 className="headline">समाजातील कर्तृत्वाचा गौरव.</h2>
        <p className="body" style={{ maxWidth: '700px', marginTop: '2rem' }}>
          विविध क्षेत्रांत उल्लेखनीय कार्य करणाऱ्या व्यक्तींचा सन्मान. प्रेरणेचा दीपस्तंभ.
        </p>
      </div>
      <div className="speakers-grid">
        {speakers.map((speaker) => (
          <div
            key={speaker.name}
            className="speaker-card"
          >
            <div className="speaker-image" style={{ position: 'relative' }}>
              <Image src={speaker.image} alt={speaker.name} fill style={{ objectFit: 'cover', objectPosition: 'center 30%',opacity: 1 }} />
            </div>
            <div className="speaker-info">
              {speaker.badge && <span className="speaker-badge">पुरस्कार विजेता</span>}
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

