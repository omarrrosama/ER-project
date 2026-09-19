export type Social = { label: string; href: string };
export type Project = { id: string; name: string; logo: string; image: string; title: string; description: string; stats: readonly string[] };

export const site = {
    name: "Eyad Ryad",
    role: "Real estate marketing / brand direction",
    about: "Eyad Ryad is a marketing expert shaping the stories, systems, and signals that move real estate brands forward. This placeholder profile will become a concise portrait of his experience, point of view, and the value he brings to ambitious property teams.",
    portrait: "/images/profileimage.png.jpeg",
    companies: [
        { name: "Northline", logo: "/images/company-northline.svg" }, { name: "Crown", logo: "/images/company-crown.svg" },
        { name: "Habitat", logo: "/images/company-habitat.svg" }, { name: "Arc", logo: "/images/company-arc.svg" },
        { name: "Elevate", logo: "/images/company-elevate.svg" }, { name: "Monument", logo: "/images/company-monument.svg" },
    ],
    galleryImages: [
        { src: "/images/gallery-01.svg", alt: "Placeholder editorial image of a modern property" },
        { src: "/images/gallery-02.svg", alt: "Placeholder editorial image of an urban skyline" },
        { src: "/images/gallery-03.svg", alt: "Placeholder editorial image of a considered interior" },
    ],
    projects: [
        { id: "atlas", name: "Atlas", logo: "/images/project-atlas-logo.svg", image: "/images/project-atlas.svg", title: "Making a destination feel inevitable", description: "Placeholder copy for Eyad's role in translating a complex property proposition into a clear, magnetic campaign system that could travel across every touchpoint.", stats: ["+120% leads", "3.4x reach", "12 markets"] },
        { id: "north", name: "North", logo: "/images/project-north-logo.svg", image: "/images/project-north.svg", title: "A sharper point of view", description: "Placeholder copy for a brand reset that gave a residential portfolio a more confident voice, from launch narrative through to the final sales conversation.", stats: ["+68% enquiries", "-24% CPA", "18 weeks"] },
        { id: "linea", name: "Linea", logo: "/images/project-linea-logo.svg", image: "/images/project-linea.svg", title: "The detail is the difference", description: "Placeholder copy for a precise launch platform designed around the moments that make a place memorable and make a buyer lean closer.", stats: ["+42% visits", "91% recall", "1 new category"] },
        { id: "one", name: "One House", logo: "/images/project-one-logo.svg", image: "/images/project-one.svg", title: "A home with a wider horizon", description: "Placeholder copy for a full-funnel campaign balancing an expressive brand idea with the operational clarity needed by a high-volume sales team.", stats: ["+87% qualified", "6.2m impressions", "8 awards"] },
        { id: "foundry", name: "Foundry", logo: "/images/project-foundry-logo.svg", image: "/images/project-foundry.svg", title: "Reframing the everyday", description: "Placeholder copy for a mixed-use development launch where culture, community, and commercial performance shared the same creative language.", stats: ["+54% footfall", "2.1x engagement", "14 partners"] },
        { id: "vista", name: "Vista", logo: "/images/project-vista-logo.svg", image: "/images/project-vista.svg", title: "A clearer view forward", description: "Placeholder copy for a digital-first leasing story that made an emerging location easier to understand, compare, and choose.", stats: ["+39% conversion", "-31% bounce", "4.8/5 response"] },
    ],
    contact: {
        email: "eyad@er-creatives.com", whatsapp: "+20 10 66288890",
        socials: [{ label: "Instagram", href: "https://www.instagram.com/eyad.ryad" }, { label: "Facebook", href: "https://www.facebook.com/eyadryadd/" }] satisfies Social[],
    },
} as const;