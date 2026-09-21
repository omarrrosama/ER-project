import Image from 'next/image';
import { site } from '@/content/site';

export function ProjectGallery() {
  return (
    <section
      className="mx-auto w-[min(100%-48px,1280px)] pb-20 max-[760px]:w-[min(100%-32px,1280px)]
        max-[760px]:pb-15"
      aria-labelledby="gallery-title"
    >
      <div className="border-line flex items-center justify-between border-t pt-3.5">
        <p className="text-muted text-xs font-bold tracking-[.14em] uppercase" id="gallery-title">
          Selected frames
        </p>
      </div>
      <div
        className="mt-10.5 grid grid-cols-3 gap-3 max-[760px]:flex max-[760px]:snap-x
          max-[760px]:snap-mandatory max-[760px]:scrollbar-none max-[760px]:overflow-x-auto"
      >
        {site.galleryImages.map((image, index) => (
          <figure
            className="group relative m-0 overflow-hidden max-[760px]:min-w-[84%]
              max-[760px]:snap-start"
            key={image.src}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={680}
              className="aspect-[1.2] w-full object-cover grayscale transition-transform
                duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
            />
            <figcaption
              className="text-ink absolute bottom-3.5 left-4 mt-3 text-xs font-bold tracking-[.14em]
                uppercase"
            >
              0{index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
