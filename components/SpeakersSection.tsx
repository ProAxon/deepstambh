import Image from 'next/image'

const speakers = [
  {
    name: 'श्री. पद्माकरराव मुळे',
    title: 'प्रख्यात उद्योगपती',
    bio: '',
    image: '/Padmakar-Mule.png',
    badge: 'awardee',
  },
  {
    name: 'श्री. डॉ. प्रवीण सूर्यवंशी',
    title: 'अध्यक्ष, ऑल इंडिया सर्जन असोसिएशन',
    bio: '',
    image: '/Dr-Pravin–Suryavanshi.png',
    badge: 'awardee',
  },
  {
    name: 'सी. ए. अशोक पाटील',
    title: 'सुप्रसिद्ध व अग्रगण्य चार्टर्ड अकाउंटंट',
    bio: '',
    image: '/CA-Ashok-Patil-Sir.png',
    badge: 'awardee',
  },
  {
    name: 'श्री. तेजराव बारगळ',
    title: 'यशस्वी शेतकरी, कृषी व्यावसायिक',
    bio: '',
    image: '/Tejrao-Bargal.png',
    badge: 'awardee',
  },
  {
    name: 'श्री. बैजु पाटील',
    title: 'निष्णांत वाइल्डलाईफ फोटोग्राफर',
    bio: '',
    image: '/Baiju-Patil.png',
    badge: 'awardee',
  },
  {
    name: 'श्री. नकुल भोसले',
    title: 'क्राफ्ट बिअर उद्योजक',
    bio: '',
    image: '/Nakul-Bhonsle.png',
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
              {speaker.bio && <p className="speaker-bio">{speaker.bio}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

