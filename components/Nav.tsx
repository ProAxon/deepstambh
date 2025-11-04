'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">
        <Image src="/logo.png" alt="दीपस्तंभ पुरस्कार सोहळा २०२५" width={72} height={37} />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/#about">बद्दल</Link>
        </li>
        <li>
          <Link href="/#speakers">पुरस्कार विजेते</Link>
        </li>
        <li>
          <Link href="https://forms.gle/7XLoKVx9DwiPKSqs5" target="_blank">नोंदणी</Link>
        </li>
      </ul>
    </nav>
  )
}
