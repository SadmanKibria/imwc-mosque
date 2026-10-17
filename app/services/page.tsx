import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { Icon } from "@/components/icons"

export const metadata: Metadata = { title: "Mosque, Madrasa & Community Services", description: "Explore Quran classes, Islamic studies, youth programmes, welfare advice and community services at Ilford Muslim Welfare Association." }

const programmes=[
  {id:"madrasa",icon:"book",title:"Hifz course",text:"Memorisation of the Qur’an with qualified teachers, individual attention and steady progress.",schedule:"Monday–Friday · 5:00–7:00 PM",fee:"£70 per month"},
  {id:"islamic-studies",icon:"book",title:"Islamic studies",text:"Qur’an, Arabic, Islamic knowledge and character-building in an age-appropriate weekend programme.",schedule:"Girls 9:00–11:00 · Boys 11:15–1:15",fee:"£30 per month"},
  {id:"youth",icon:"users",title:"Youth club & mentoring",text:"Games, sport, food and a trusted space to ask real questions about deen, study, work and life.",schedule:"Friday evenings · Ages 14+",fee:"Free, including food"},
  {id:"welfare",icon:"heart",title:"Social welfare advice",text:"A listening ear, practical guidance and connections to the right local support for individuals and families.",schedule:"Contact us to arrange a conversation",fee:"Free community service"},
  {id:"dawah",icon:"spark",title:"Dawah & outreach",text:"Resources, community events and welcoming conversations that help build bridges across Ilford.",schedule:"Regular events and activities",fee:"Free to participate"},
  {id:"community",icon:"users",title:"Community activities",text:"Iftar, talks, sports and gatherings that bring different generations together around faith and friendship.",schedule:"Announced through our WhatsApp group",fee:"Open to the community"}
]
export default function Services(){return <SiteShell><main><section className="page-hero"><div className="wrap"><div className="kicker light">What we offer</div><h1>Pray. Learn.<br/><em>Live connected.</em></h1><p>Services designed around real community life—from Qur’an education to youth mentoring and practical support.</p></div></section><section className="content-page"><div className="wrap program-grid">{programmes.map(p=><article id={p.id} className="program-card" key={p.title}><Icon name={p.icon}/><h2>{p.title}</h2><p>{p.text}</p><dl><dt>When</dt><dd>{p.schedule}</dd><dt>Cost</dt><dd>{p.fee}</dd></dl></article>)}</div></section></main></SiteShell>}
