import Image from "next/image";
import { site } from "@/content/site";
import { LetterRollNav } from "@/components/LetterRollNav";

const phoneHref = `tel:${site.contact.whatsapp.replace(/\D/g, "")}`;

export function Footer() {
    const socials = [
        { label: "Linkedin", href: "https://www.linkedin.com" },
        ...site.contact.socials.map((social) => ({ label: social.label, href: social.href })),
    ];

    return <footer className="footer page-shell" id="contact">
        <div className="footer-columns">
            <div className="footer-column">
                <p className="footer-column-label">Set Meeting</p>
                <LetterRollNav ariaLabel="Set Meeting" links={[
                    { label: "Email", href: `mailto:${site.contact.email}` },
                    { label: "Whatsapp", href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}` },
                    { label: "Direct Call", href: phoneHref },
                ]} />
            </div>
            <div className="footer-column footer-column-right">
                <p className="footer-column-label">My Channels</p>
                <LetterRollNav ariaLabel="My Channels" links={socials.slice(0, 3).map((social) => ({ label: social.label, href: social.href, external: true }))} />
            </div>
        </div>
        <div className="footer-logo-row">
            <Image src="/images/logo-placeholder.svg" alt="Eyad Ryad logo placeholder" width={1600} height={260} />
        </div>
        <div className="footer-meta">
            <p>Copyright © 2026 EYAD RYAD, All rights reserved</p>
        </div>
    </footer>;
}
