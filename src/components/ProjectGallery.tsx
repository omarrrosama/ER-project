import Image from "next/image";
import { site } from "@/content/site";

export function ProjectGallery() {
    return <section
        className="pb-40 w-[min(100%-48px,1280px)] mx-auto max-[760px]:pb-27.5 max-[760px]:w-[min(100%-32px,1280px)]"
        aria-labelledby="gallery-title"
    >
        <div className="flex justify-between items-center border-t border-line pt-3.5">
            <p className="uppercase tracking-[.14em] text-xs font-bold text-muted" id="gallery-title">Selected frames</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10.5 max-[760px]:flex max-[760px]:overflow-x-auto max-[760px]:snap-x max-[760px]:snap-mandatory max-[760px]:scrollbar-none">
            {site.galleryImages.map((image, index) => <figure
                className="group relative m-0 overflow-hidden max-[760px]:min-w-[84%] max-[760px]:snap-start"
                key={image.src}
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={900}
                    height={680}
                    className="w-full aspect-[1.2] object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
                />
                <figcaption className="absolute left-4 bottom-3.5 text-ink mt-3 uppercase tracking-[.14em] text-xs font-bold">0{index + 1}</figcaption>
            </figure>)}
        </div>
    </section>;
}