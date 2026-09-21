import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
    return <section
        className="relative grid min-h-[100svh] items-center gap-[clamp(48px,7vw,112px)] grid-cols-[minmax(0,1.05fr)_minmax(400px,.95fr)] pt-24 pr-0 pb-18 pl-13 w-[min(100%-48px,1280px)] mx-auto min-[761px]:max-[1200px]:min-h-auto min-[761px]:max-[1200px]:items-start min-[761px]:max-[1200px]:pt-0 max-[760px]:min-h-auto max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-8.5 max-[760px]:pt-0 max-[760px]:pb-18 max-[760px]:pl-7 max-[760px]:pr-0 max-[760px]:w-[min(100%-32px,1280px)]"
        aria-labelledby="hero-title"
    >
        <div className="min-[761px]:max-[1200px]:translate-y-24 max-[760px]:order-2">
            <h1 id="hero-title" className="max-w-[700px] text-[clamp(92px,10.5vw,148px)] uppercase tracking-[.015em] leading-[.82] mt-0 mb-5.5 max-[760px]:max-w-full max-[760px]:text-[clamp(74px,21vw,112px)] max-[760px]:leading-[.84] max-[760px]:mt-0 max-[760px]:mb-5">{site.name}</h1>
            <p className="mt-0 mb-4 text-muted text-[11px] font-semibold tracking-[3px] max-[760px]:text-[10px] max-[760px]:tracking-[2.5px] max-[760px]:mb-3">About</p>
            <div className="w-[54px] h-1 mb-6 bg-ink max-[760px]:w-10.5 max-[760px]:h-0.75 max-[760px]:mb-5" />
            <p className="m-0 max-w-xl text-muted text-base leading-[1.65] max-[760px]:max-w-[85%] max-[760px]:text-[15px]">{site.about}</p>
            <a
                className="inline-flex items-center gap-2.5 min-h-11 mt-9.5 pb-0.75 border-b border-ink text-[11px] font-semibold uppercase tracking-[.12em] focus-visible:outline focus-visible:outline-ink focus-visible:outline-offset-[5px]"

                href="#contact"
            >My Channels </a>
        </div>
        <figure className="m-0 max-[760px]:order-1 max-[760px]:self-end max-[760px]:w-[60%] max-[760px]:pb-1.75 max-[760px]:pl-1.75 max-[760px]:rounded-bl-[150px]">
            <Image
                src={site.portrait}
                alt={`Portrait placeholder for ${site.name}`}
                width={720}
                height={900}
                priority
                className="block h-auto w-full aspect-[4/5.4] object-cover grayscale contrast-[.9] rounded-bl-[250px] max-[760px]:aspect-[4/5] max-[760px]:rounded-bl-[140px]"
            />
        </figure>
    </section>;
}