import Image from "next/image";
import { site } from "@/content/site";

export function LogoMarquee() {
    const logos = [...site.companies, ...site.companies];
    return <section className="marquee-section page-shell" aria-labelledby="companies-title">
        <div className="section-heading">
            <p className="section-kicker" id="companies-title">Companies</p>

        </div>
        <div className="marquee-mask"><div className="marquee-track">
            {logos.map((company, index) => <div className="company-logo" key={`${company.name}-${index}`}><Image src={company.logo} alt={`${company.name} placeholder logo`} width={150} height={42} /></div>)}
        </div>
        </div>
    </section>;
}