import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function Home() {
    return <main id="top"><Hero /><LogoMarquee /><ProjectGallery /><ProjectShowcase /><Footer /></main>;
}