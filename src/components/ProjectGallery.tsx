import Image from "next/image";
import { site } from "@/content/site";

export function ProjectGallery() {
    return <section className="gallery-section page-shell" aria-labelledby="gallery-title"><div className="section-heading"><p className="section-kicker" id="gallery-title">Selected frames</p></div>
        <div className="gallery-grid">{site.galleryImages.map((image, index) => <figure className="gallery-image" key={image.src}><Image src={image.src} alt={image.alt} width={900} height={680} /><figcaption>0{index + 1}</figcaption></figure>)}</div>
    </section>;
}