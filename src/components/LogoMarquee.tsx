import Image from 'next/image';
import { site } from '@/content/site';

export function LogoMarquee() {
  const logos = [...site.companies, ...site.companies];
  return (
    <section
      className="mx-auto w-[min(100%-48px,1280px)] pt-18 pb-25 max-[760px]:w-[min(100%-32px,1280px)]
        max-[760px]:pb-17.5"
      aria-labelledby="companies-title"
    >
      <div className="border-line flex items-center justify-between border-t pt-3.5">
        <p className="text-muted text-xs font-bold tracking-[.14em] uppercase" id="companies-title">
          Companies
        </p>
      </div>
      <div
        className="relative mt-10.5 overflow-hidden
          mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div
          className="animate-marquee flex w-max motion-reduce:w-full motion-reduce:transform-none
            motion-reduce:animate-none motion-reduce:flex-wrap"
        >
          {logos.map((company, index) => (
            <div
              className="border-line grid h-17.5 w-[clamp(160px,18vw,240px)] flex-none
                place-items-center border-l opacity-[.62]"
              key={`${company.name}-${index}`}
            >
              <Image
                src={company.logo}
                alt={`${company.name} placeholder logo`}
                width={150}
                height={42}
                className="h-auto w-[62%] object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
