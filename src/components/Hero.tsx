import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
    return <section className="hero-section page-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
            <h1 id="hero-title">{site.name}</h1>
            <p className="hero-kicker">About</p>
            <div className="hero-divider" />
            <p className="hero-about">{site.about}</p>
            <a className="text-link" href="#contact">My Channels <span aria-hidden="true">↘</span></a>
        </div>
        <figure className="hero-portrait">
            <Image src={site.portrait} alt={`Portrait placeholder for ${site.name}`} width={720} height={900} priority /></figure>
    </section>;
}