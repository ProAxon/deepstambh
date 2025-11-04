'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SpeakersSection from '@/components/SpeakersSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Tejrao Bargal',
    handle: 'पुरस्कार विजेता',
    avatar: '/Tejrao-Bargal.png',
    text: `"समाजातील कर्तृत्वाचा गौरव करण्याचा हा उपक्रम खरोखरच प्रेरणादायी आहे. अशा कार्यक्रमांमुळे आपल्या समाजातील प्रतिभाशाली व्यक्तींना मान्यता मिळते आणि इतरांना प्रेरणा मिळते."`,
  },
  {
    name: 'Nakul Bhonsle',
    handle: 'पुरस्कार विजेता',
    avatar: '/Nakul-Bhonsle.png',
    text: `"दीपस्तंभ पुरस्कार सोहळा हा केवळ पुरस्कार देण्याचा कार्यक्रम नाही, तर समाजातील उत्कृष्ट कार्याचा सन्मान करण्याचा एक महत्वाचा प्रसंग आहे. या उपक्रमामुळे समाजातील प्रेरणा वाढते."`,
  },
  {
    name: 'CA Ashok Patil',
    handle: 'पुरस्कार विजेता',
    avatar: '/CA-Ashok-Patil-Sir.png',
    text: `"अशा कार्यक्रमांमुळे समाजातील युवकांना प्रेरणा मिळते आणि त्यांना योग्य दिशा मिळते. हा एक महत्वाचा उपक्रम आहे."`,
  },
  {
    name: 'Dr Pravin Suryavanshi',
    handle: 'पुरस्कार विजेता',
    avatar: '/Dr-Pravin–Suryavanshi.png',
    text: `"समाजातील विविध क्षेत्रांत उल्लेखनीय कार्य करणाऱ्या व्यक्तींचा सन्मान करणे हे खरोखरच प्रशंसनीय आहे. अशा कार्यक्रमांमुळे समाजाची प्रगती होते."`,
  },
]

const faqs = [
  { question: 'Who is Tokyo Design Forum for?' },
  { question: 'Why Tokyo? What makes this different from every other design conference?' },
  { question: "What's included with my ticket?" },
  { question: 'How many people will be there?' },
  { question: 'Will sessions be livestreamed or recorded?' },
  { question: 'I want to sponsor. How does that work?' },
  { question: "What's the refund policy?" },
  { question: 'How do I justify this to my company or team?' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const aboutText1Ref = useRef<HTMLParagraphElement>(null)
  const aboutText2Ref = useRef<HTMLParagraphElement>(null)
  const aboutText3Ref = useRef<HTMLParagraphElement>(null)
  const venueGridRef = useRef<HTMLDivElement>(null)
  const venueImageCardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Dark shader canvas animation
    const canvas = document.querySelector('.dark-shader') as HTMLCanvasElement
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const animate = () => {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          requestAnimationFrame(animate)
        }
        animate()

        const handleResize = () => {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }
    }

    // Ensure video stays visible and plays
    if (videoRef.current) {
      const video = videoRef.current
      video.style.display = 'block'
      video.style.visibility = 'visible'
      video.style.opacity = '1'
      video.style.zIndex = '0'

      // Force video to load
      video.load()

      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, but video should still be visible
          console.log('Video autoplay prevented, but video should still be visible')
        })
      }

      // Ensure video remains visible even if errors occur
      video.addEventListener('error', () => {
        console.error('Video error, but keeping element visible')
        video.style.display = 'block'
        video.style.visibility = 'visible'
      })
    }

  }, [])

  useLayoutEffect(() => {
    // About section scroll animations
    const setupAnimations = () => {
      const textElements = [aboutText1Ref.current, aboutText2Ref.current, aboutText3Ref.current]

      if (textElements.every(el => el !== null)) {
        textElements.forEach((element) => {
          if (element) {
            // Set initial opacity via GSAP
            gsap.set(element, { opacity: 0.3 })

            // Create scroll animation using fromTo to animate from 0.3 to 1
            gsap.fromTo(
              element,
              { opacity: 0.3 },
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: element,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: true,
                  immediateRender: false,
                },
              }
            )
          }
        })

        // Refresh ScrollTrigger after creating animations
        ScrollTrigger.refresh()
      }
    }

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      setupAnimations()
    })

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerElement = trigger.vars?.trigger
        const textElements = [aboutText1Ref.current, aboutText2Ref.current, aboutText3Ref.current]
        if (triggerElement && textElements.includes(triggerElement as HTMLParagraphElement)) {
          trigger.kill()
        }
      })
    }
  }, [])

  useLayoutEffect(() => {
    // Venue grid image animations
    const setupVenueAnimations = () => {
      const imageCards = venueImageCardsRef.current.filter(Boolean)

      if (imageCards.length > 0) {
        imageCards.forEach((card, index) => {
          if (card) {
            // Set initial state
            gsap.set(card, { opacity: 0, y: 30 })

            // Create scroll animation
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none none',
              },
              delay: index * 0.1, // Stagger animation
            })
          }
        })

        // Refresh ScrollTrigger after creating animations
        ScrollTrigger.refresh()
      }
    }

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      setupVenueAnimations()
    })

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerElement = trigger.vars?.trigger
        if (triggerElement && venueImageCardsRef.current.includes(triggerElement as HTMLDivElement)) {
          trigger.kill()
        }
      })
    }
  }, [])

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Nav />

      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tdf%20hero-kWogeZADipb8UEioYkvTdTKES0zLOz.mp4"
          onLoadedData={() => {
            if (videoRef.current) {
              videoRef.current.style.display = 'block'
              videoRef.current.style.visibility = 'visible'
              videoRef.current.style.opacity = '1'
            }
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: 0,
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          Your browser does not support the video tag.
        </video>

        <div className="hero-video-overlay"></div>
        <canvas className="dark-shader"></canvas>
        <div className="grid-bg"></div>

        <div className="hero-content">
          <h1 className="display">दीपस्तंभ पुरस्कार सोहळा २०२५</h1>
          <p className="hero-subtitle">
            प्रेरणेचा सण • समाजातील कर्तृत्वाचा गौरव
          </p>
          <p className="hero-date">
            १५ नोव्हेंबर २०२५ | एम. आय. टी. प्रांगण, बीड बायपास रोड, छत्रपती संभाजीनगर
          </p>
          <div className="cta-group">
            <Link href="https://forms.gle/7XLoKVx9DwiPKSqs5" className="btn btn-primary" target="_blank">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="logo-strip">
        <div className="logo-strip-eyebrow">Made possible by</div>
        <div className="logo-strip-content">
          <a href="http://nvgt.jp" target="_blank" rel="noopener noreferrer">
            <Image src="/nvgt-logo.svg" alt="NVGT" width={120} height={40} className="partner-logo" />
          </a>
          <a href="https://x.com/opacityhq" target="_blank" rel="noopener noreferrer">
            <Image src="/opacity-logo.svg" alt="Opacity" width={120} height={40} className="partner-logo" />
          </a>
        </div>
      </section> */}

      <section className="about-section" id="about" ref={aboutSectionRef}>
        <div className="eyebrow">बद्दल</div>

        <p className="large-body" ref={aboutText1Ref}>
          हा फक्त एक पुरस्कार सोहळा नाही.
        </p>

        <br />
        <br />

        <p className="large-body" ref={aboutText2Ref}>
          <strong>दीपस्तंभ पुरस्कार सोहळा २०२५</strong> हा मराठा समाज प्रतिष्ठान, छत्रपती संभाजीनगर
          यांचा प्रेरणादायी उपक्रम आहे — ज्यामध्ये समाजातील विविध क्षेत्रांत उल्लेखनीय कार्य
          करणाऱ्या व्यक्तींचा सन्मान केला जातो.
          इथे केवळ गौरव नव्हे, तर एकत्र येऊन एकमेकांकडून शिकण्याची आणि प्रेरणा घेण्याची संधी आहे.
        </p>

        <br />
        <br />

        <p className="large-body" ref={aboutText3Ref}>
          १५ नोव्हेंबर २०२५, एम. आय. टी. प्रांगण, छत्रपती संभाजीनगर —
          हजारो समाजबंधूंनी उजळवलेला कर्तृत्वाचा दीप.
          चला, या प्रेरणेचा भाग बनूया.
        </p>
      </section>

      <SpeakersSection />


      <section className="aarti-section">
        <div className="aarti-content">
          <div className="eyebrow">AARTI बद्दल</div>

          <h2 className="headline" style={{ marginBottom: '3rem' }}>
            ज्ञान. कौशल्य. प्रगती — एकत्रित भविष्याची दिशा.
          </h2>

          <p className="body" style={{ maxWidth: '900px', marginBottom: '1.5rem' }}>
            <strong>आऊसाहेब रिसर्च अँड ट्रेनिंग इन्स्टिट्यूट (AARTI)</strong>
            हा समाजातील शिक्षण, संशोधन आणि कौशल्य विकासासाठी उभारला जाणारा अत्याधुनिक प्रकल्प आहे.
            या केंद्राचा उद्देश — प्रत्येक तरुणाला तंत्रज्ञानाच्या माध्यमातून आत्मनिर्भर बनवणे.
          </p>

          <p className="body" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
            ग्रामीण आणि शहरी भागातील युवकांना समान संधी देत,
            संशोधन, प्रशिक्षण आणि उद्योजकतेचा संगम निर्माण करणे हा AARTI चा मूलभूत हेतू आहे.
            येथे "शिका, वाढा आणि समाजाला दिशा द्या" हा संदेश प्रत्येक कृतीतून झळकतो.
          </p>

          <h3 className="venue-headline">शेंद्रा एम. आय. डी. सी., छत्रपती संभाजीनगर</h3>
          <p className="body" style={{ maxWidth: '700px', marginBottom: '1rem' }}>
            ३८,००० चौ. फुटांच्या विस्तीर्ण भूमीवर उभे राहणारे AARTI स्किल सेंटर —
            आधुनिक तंत्रज्ञान, संशोधन प्रयोगशाळा आणि प्रशिक्षण सुविधा यांनी सज्ज.
          </p>
          <p className="body" style={{ maxWidth: '700px', marginBottom: '1rem' }}>
            समाजातील प्रत्येकाच्या योगदानातून साकार होणारा हा दीपस्तंभ —
            पुढील पिढ्यांसाठी ज्ञान आणि प्रगतीचा मार्ग उजळवेल.
          </p>

          <a
            href="https://forms.gle/7XLoKVx9DwiPKSqs5"
            target="_blank"
            rel="noopener noreferrer"
            className="venue-link"
          >
            AARTI बद्दल अधिक जाणून घ्या →
          </a>

          <div className="venue-grid" ref={venueGridRef}>
            <div
              className="venue-image-card"
              style={{ position: 'relative' }}
              ref={(el) => { venueImageCardsRef.current[0] = el }}
            >
              <Image
                src="/aarti-lab.jpg"
                alt="AARTI प्रशिक्षण प्रयोगशाळा"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div
              className="venue-image-card"
              style={{ position: 'relative' }}
              ref={(el) => { venueImageCardsRef.current[1] = el }}
            >
              <Image
                src="/aarti-campus.jpg"
                alt="AARTI कॅम्पसचे दृश्य"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div
              className="venue-image-card"
              style={{ position: 'relative' }}
              ref={(el) => { venueImageCardsRef.current[2] = el }}
            >
              <Image
                src="/aarti-training.jpg"
                alt="प्रशिक्षण सत्रातील विद्यार्थी"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div
              className="venue-image-card"
              style={{ position: 'relative' }}
              ref={(el) => { venueImageCardsRef.current[3] = el }}
            >
              <Image
                src="/aarti-community.jpg"
                alt="AARTI समाजातील सहभाग कार्यक्रम"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>



      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="headline">समाजातील प्रतिक्रिया</h2>
          <p className="caption">पुरस्कार विजेत्यांकडून प्राप्त झालेल्या प्रतिक्रिया. आपले अनुभव सामायिक करा.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="testimonial-header">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="testimonial-avatar"
                />
                <div className="testimonial-meta">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-handle">{testimonial.handle}</span>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <a href="https://forms.gle/7XLoKVx9DwiPKSqs5" target="_blank" rel="noopener noreferrer">
            आपले अनुभव सामायिक करा →
          </a>
        </div>
      </section>




      <section className="stay-updated-section">
        <div className="stay-updated-content">
          <h2 className="headline" style={{ marginBottom: '1rem' }}>
            अपडेट रहा
          </h2>
          <p className="body" style={{ marginBottom: '2rem', opacity: 0.6 }}>
            कार्यक्रमाच्या नवीनतम माहितीसाठी आणि पुरस्कार विजेत्यांच्या घोषणांसाठी सबस्क्राईब करा.
          </p>
          <form className="email-form" onSubmit={handleEmailSubmit}>
            <div className="email-input-wrapper">
              <input
                type="email"
                placeholder="आपला ईमेल प्रविष्ट करा"
                className="email-input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="submit-button">
                सबस्क्राईब करा
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      <a href="https://forms.gle/7XLoKVx9DwiPKSqs5" target="_blank" rel="noopener noreferrer" className="nvgt-badge">
        <span className="badge-text">आयोजक</span>
        <span className="badge-brand">मराठा समाज प्रतिष्ठान</span>
      </a>

      <button
        className="video-trigger"
        aria-label="प्रास्ताविक व्हिडिओ पहा"
        onClick={() => setShowVideoModal(true)}
      >
        <div className="video-trigger-thumbnail" style={{ position: 'relative' }}>
          <Image
            className="video-trigger-preview"
            src="/video-thumbnail.jpg"
            alt="प्रास्ताविक व्हिडिओ"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="video-trigger-play">
            <svg className="play-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white"></circle>
              <path
                d="M32 26C32 24.5 33.5 23.5 34.8 24.2L56.3 36.2C57.6 36.9 57.6 38.9 56.3 39.6L34.8 51.6C33.5 52.3 32 51.3 32 49.8V26Z"
                fill="black"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </button>

      {showVideoModal && (
        <div className="video-modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="video-modal-close"
                onClick={() => setShowVideoModal(false)}
                aria-label="व्हिडिओ बंद करा"
              >
                ×
              </button>
            <div className="video-container">
              <video
                className="video-player"
                controls
                autoPlay
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tdf%20hero-kWogeZADipb8UEioYkvTdTKES0zLOz.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

