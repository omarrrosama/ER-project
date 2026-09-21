import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
    return <section
        className="relative grid min-h-100svh items-center gap-[clamp(48px,7vw,112px)] grid-cols-[minmax(0,1.05fr)_minmax(400px,.95fr)] pt-24 pr-0 pb-10 pl-13 w-[min(100%-48px,1280px)] mx-auto min-[761px]:max-[1200px]:min-h-auto min-[761px]:max-[1200px]:items-start min-[761px]:max-[1200px]:pt-0 max-[760px]:min-h-auto max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-8.5 max-[760px]:pt-0 max-sm:pb-0 max-[760px]:pl-7 max-[760px]:pr-0 max-[760px]:w-[min(100%-32px,1280px)]"
        aria-labelledby="hero-title"
    >
        <div className="min-[761px]:max-[1200px]:translate-y-24 max-[760px]:order-2">
            <h1 id="hero-title" className="max-w-175 text-[clamp(92px,10.5vw,148px)] uppercase tracking-[.015em] leading-[.82] mt-0 mb-5.5 max-[760px]:max-w-full max-[760px]:text-[clamp(74px,21vw,112px)] max-[760px]:leading-[.84] max-[760px]:mt-0 max-[760px]:mb-5">{site.name}</h1>
            <p className="mt-0 mb-4 text-muted text-[11px] font-semibold tracking-[3px] max-[760px]:text-[10px] max-[760px]:tracking-[2.5px] max-[760px]:mb-3">About</p>
            <div className="w-13.5 h-1 mb-6 bg-ink max-[760px]:w-10.5 max-[760px]:h-0.75 max-[760px]:mb-5" />
            <p className="m-0 max-w-xl text-muted text-base leading-[1.65] max-[760px]:max-w-[85%] max-[760px]:text-[15px]">{site.about}</p>
            <Link
                className="group inline-flex items-center gap-3 min-h-11 mt-8  pl-5 pr-1.5 py-1.5 rounded-full border border-ink text-[11px] font-semibold uppercase tracking-[.12em] transition-colors duration-300 hover:border-ink/60 focus-visible:outline focus-visible:outline-ink focus-visible:outline-offset-[5px]"
                href="#contact"
            >
                My Channels
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-page transition-transform duration-300 group-hover:rotate-45">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </Link>
        </div>
        <figure className="m-0 max-[760px]:order-1 max-[760px]:self-end max-[760px]:w-[60%] max-[760px]:pb-1.75 max-[760px]:pl-1.75 max-[760px]:rounded-bl-[150px]">
            <Image
                src={site.portrait}
                alt={`Portrait placeholder for ${site.name}`}
                width={720}
                height={900}
                priority
                className="block h-auto w-full aspect-[4/5.4] object-cover grayscale contrast-[.9] rounded-bl-[250px] max-[760px]:aspect-4/5 max-[760px]:rounded-bl-[140px]"
            />
        </figure>
    </section>;
}