import Image from "next/image";
import { site } from "@/content/site";

export function LogoMarquee() {
    const logos = [...site.companies, ...site.companies];
    return <section
        className="pt-18 pb-25 w-[min(100%-48px,1280px)] mx-auto max-[760px]:pb-17.5 max-[760px]:w-[min(100%-32px,1280px)]"
        aria-labelledby="companies-title"
    >
        <div className="flex justify-between items-center border-t border-line pt-3.5">
            <p className="uppercase tracking-[.14em] text-xs font-bold text-muted" id="companies-title">Companies</p>
        </div>
        <div className="relative overflow-hidden mt-10.5 mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex w-max animate-marquee motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:transform-none">
                {logos.map((company, index) => <div className="grid place-items-center flex-none w-[clamp(160px,18vw,240px)] h-17.5 border-l border-line opacity-[.62]" key={`${company.name}-${index}`}>
                    <Image src={company.logo} alt={`${company.name} placeholder logo`} width={150} height={42} className="w-[62%] h-auto object-contain grayscale" />
                </div>)}
            </div>
        </div>
    </section>;
}