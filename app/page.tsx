import Link from "next/link"
import { Icon } from "@/components/icons"
import { PrayerWidget } from "@/components/prayer-widget"
import { SiteShell } from "@/components/site-shell"

const services = [
  { icon:"book", title:"Madrasa & Hifz", text:"Qur’an, Arabic and Islamic studies taught with care, structure and purpose.", href:"/services#madrasa" },
  { icon:"users", title:"Youth & mentoring", text:"A judgement-free place for young Muslims to connect, build confidence and grow.", href:"/#youth" },
  { icon:"heart", title:"Welfare & support", text:"Practical guidance and compassionate support for individuals and families.", href:"/services#welfare" },
]

export default function Home() {
  return <SiteShell><main>
    <section className="hero">
      <img className="hero-bg" src="/images/youth-football.jpg" alt="Young people from Ilford at a community football day" />
      <div className="hero-shade" />
      <div className="hero-content wrap">
        <div className="eyebrow"><span/> Your mosque. Your people.</div>
        <h1>Faith feels different<br/><em>when you belong.</em></h1>
        <p>More than a place to pray. A home for Ilford’s next generation to learn, connect and grow.</p>
        <div className="hero-actions"><a className="button lime" href="#prayer-times">View prayer times <Icon name="arrow"/></a><a className="button glass" href="#youth">Explore youth programmes</a></div>
        <div className="hero-meta"><span><Icon name="pin"/>379 Oaklands Park Ave, IG1</span><span><i/>Open for daily prayers</span></div>
      </div>
      <div className="hero-note"><span>Built around community</span><b>Prayer · Learning · Youth · Care</b></div>
    </section>

    <section className="quick-strip">
      <div className="wrap quick-grid">
        <div><small>Jumu’ah</small><b>Friday · 1:30 PM</b></div>
        <div><small>Youth club</small><b>Friday evenings · Free</b></div>
        <div><small>Need help?</small><a href="tel:07950206007">Call 07950 206007 <Icon name="arrow"/></a></div>
      </div>
    </section>

    <section id="prayer-times" className="section prayer-section">
      <div className="wrap split-heading">
        <div><div className="kicker">Plan your day around salah</div><h2>Prayer times.<br/><span>Always close.</span></h2></div>
        <p>Live congregation times from our Masjidbox timetable. Tap through for the complete monthly schedule.</p>
      </div>
      <div className="wrap prayer-frame"><PrayerWidget /></div>
    </section>

    <section id="youth" className="section youth-section">
      <div className="wrap youth-layout">
        <div className="youth-copy">
          <div className="kicker light">Made for young Muslims</div>
          <h2>Your Friday night<br/><span>just found a purpose.</span></h2>
          <p>Games, food, faith and honest conversation. Come as you are—even if you’re quiet, new, or don’t know anyone yet.</p>
          <div className="tags"><span>14+ years</span><span>Every Friday</span><span>Free + food</span></div>
          <a className="button lime" href="https://wa.me/447950206007?text=Youth%20club" target="_blank" rel="noreferrer">Message “Youth club” <Icon name="arrow"/></a>
        </div>
        <div className="youth-photos">
          <figure className="photo-main"><img src="/images/youth-games.jpg" alt="Young people playing games at the IMWA youth club"/><figcaption>Play. Talk. Belong.</figcaption></figure>
          <figure className="photo-small"><img src="/images/youth-class.jpg" alt="Youth learning together at the mosque"/><span>Faith that feels relevant</span></figure>
        </div>
      </div>
    </section>

    <section className="section learning-section">
      <div className="wrap learning-grid">
        <div className="learning-mosaic"><img className="learn-wide" src="/images/quran-class.jpg" alt="Children learning Qur’an with their teacher"/><img className="learn-tall" src="/images/classroom.jpg" alt="Islamic studies lesson at IMWA"/><div className="mosaic-quote">Knowledge<br/>with character.</div></div>
        <div className="learning-copy"><div className="kicker">A foundation for life</div><h2>Growing hearts.<br/><span>Growing minds.</span></h2><p>From first letters to confident recitation, our teachers help young people build a lasting relationship with the Qur’an and their faith.</p><ul><li>Hifz course · Monday to Friday</li><li>Weekend Islamic studies for boys and girls</li><li>Arabic, Qur’an, character and community</li></ul><Link className="text-link" href="/services#madrasa">Explore classes <Icon name="arrow"/></Link></div>
      </div>
    </section>

    <section className="section services-section">
      <div className="wrap"><div className="center-heading"><div className="kicker">One community. Many ways to serve.</div><h2>Here when it matters.</h2></div><div className="service-grid">{services.map(s=><Link key={s.title} href={s.href} className="service-card"><Icon name={s.icon}/><span>0{services.indexOf(s)+1}</span><h3>{s.title}</h3><p>{s.text}</p><b>Discover more <Icon name="arrow"/></b></Link>)}</div></div>
    </section>

    <section className="photo-ribbon" aria-label="IMWA community moments"><img src="/images/community-iftar.jpg" alt="Community iftar at IMWA"/><img src="/images/community-outreach.jpg" alt="IMWA community volunteers giving out water"/><img src="/images/youth-football.jpg" alt="IMWA youth football activity"/></section>

    <section className="section join-section">
      <div className="wrap join-card"><div><div className="kicker light">Stay in the loop</div><h2>The community is<br/>already moving.</h2><p>Prayer updates, events, classes and reminders—straight to your phone.</p></div><a className="button lime" href="https://chat.whatsapp.com/Iwmni4n4hfQDqZ7caO1GPi?mode=wwt" target="_blank" rel="noreferrer">Join the WhatsApp community <Icon name="arrow"/></a></div>
    </section>

    <section id="visit" className="section visit-section"><div className="wrap visit-grid"><div><div className="kicker">Come and say salaam</div><h2>Your place in Ilford.</h2><p>379 Oaklands Park Avenue<br/>Ilford · IG1 1TG</p><div className="visit-actions"><a className="button dark" href="https://www.google.com/maps/search/?api=1&query=379+Oaklands+Park+Ave+Ilford+IG1+1TG" target="_blank" rel="noreferrer">Get directions <Icon name="arrow"/></a><a className="text-link" href="tel:07950206007">07950 206007</a></div></div><div className="visit-photo"><img src="/images/prayer-hall.jpg" alt="Prayer hall at Ilford Muslim Welfare Association"/><span>Open for the five daily prayers</span></div></div></section>
  </main></SiteShell>
}
