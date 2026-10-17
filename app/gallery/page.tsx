import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
export const metadata: Metadata={title:"Community Gallery",description:"See life at Ilford Muslim Welfare Association—prayer, learning, youth activities, outreach and community gatherings."}
const photos=[
  ["/images/youth-football.jpg","Youth football"],["/images/community-iftar.jpg","Community iftar"],["/images/quran-class.jpg","Learning Qur’an"],["/images/youth-games.jpg","Youth club"],["/images/community-outreach.jpg","Community outreach"],["/images/classroom.jpg","Islamic studies"]
]
export default function Gallery(){return <SiteShell><main><section className="page-hero"><div className="wrap"><div className="kicker light">This is our community</div><h1>Real people.<br/><em>Real moments.</em></h1><p>A glimpse of prayer, learning, friendship and service at IMWA.</p></div></section><section className="content-page"><div className="wrap gallery-grid">{photos.map(([src,caption])=><figure key={src}><img src={src} alt={caption}/><figcaption>{caption}</figcaption></figure>)}</div></section></main></SiteShell>}
