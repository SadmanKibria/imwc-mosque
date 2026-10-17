"use client"

import Link from "next/link"
import { useState } from "react"
import { Icon } from "./icons"

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [{href:"/#prayer-times",label:"Prayer times"},{href:"/#youth",label:"Youth"},{href:"/services",label:"Services"},{href:"/gallery",label:"Gallery"},{href:"/#visit",label:"Visit"}]
  return <>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Ilford Muslim Welfare Association home">
        <img src="/imwc-logo.png" alt="" />
        <span><b>Ilford Muslim</b><small>Welfare Association</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}<Link href="/donate" className="nav-donate">Donate</Link></nav>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Open navigation" aria-expanded={open}><Icon name="menu" /></button>
    </header>
    <div className={`mobile-menu ${open?"open":""}`}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<Link href="/donate" onClick={()=>setOpen(false)}>Donate now</Link></div>
  </>
}

export function Footer() {
  return <footer>
    <div className="footer-grid wrap">
      <div className="footer-intro"><img src="/imwc-logo.png" alt="IMWA logo"/><p>A place to pray, learn, grow and belong—in the heart of Ilford.</p></div>
      <div><h3>Find your place</h3><Link href="/#prayer-times">Prayer times</Link><Link href="/#youth">Youth club</Link><Link href="/services">Madrasa & services</Link><Link href="/donate">Support the mosque</Link></div>
      <div><h3>Visit us</h3><p>379 Oaklands Park Avenue<br/>Ilford IG1 1TG</p><a href="tel:07950206007">07950 206007</a><a href="mailto:imwchello@gmail.com">imwchello@gmail.com</a></div>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Ilford Muslim Welfare Association</span><span>Registered in England & Wales · 14615563</span></div>
  </footer>
}

export function WhatsAppButton() {
  return <a className="whatsapp" href="https://wa.me/447950206007" target="_blank" rel="noreferrer" aria-label="Chat to IMWA on WhatsApp"><Icon name="message"/><span>Chat to us</span></a>
}

export function MobileDock() {
  return <nav className="mobile-dock" aria-label="Quick actions"><a href="/#prayer-times"><Icon name="clock"/><span>Prayers</span></a><a href="https://www.google.com/maps/search/?api=1&query=379+Oaklands+Park+Ave+Ilford+IG1+1TG" target="_blank" rel="noreferrer"><Icon name="pin"/><span>Directions</span></a><a href="https://wa.me/447950206007" target="_blank" rel="noreferrer"><Icon name="message"/><span>WhatsApp</span></a><Link href="/donate"><Icon name="heart"/><span>Donate</span></Link></nav>
}

export function SiteShell({children}:{children:React.ReactNode}) { return <><Header/>{children}<Footer/><WhatsAppButton/><MobileDock/></> }
