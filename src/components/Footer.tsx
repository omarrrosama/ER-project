import Image from "next/image";
import { site } from "@/content/site";
import { LetterRollNav } from "@/components/LetterRollNav";

const phoneHref = `tel:${site.contact.whatsapp.replace(/\D/g, "")}`;

export function Footer() {
    const socials = [
        { label: "Linkedin", href: "https://www.linkedin.com" },
        ...site.contact.socials.map((social) => ({ label: social.label, href: social.href })),
    ];

    return <footer
        className="border-t border-line pt-7 pb-5 w-[min(100%-48px,1280px)] mx-auto max-[760px]:w-[min(100%-32px,1280px)]"
        id="contact"
    >
        <div className="flex justify-between gap-8 max-[760px]:flex-col max-[760px]:gap-7">
            <div className="flex flex-col gap-2.5">
                <p className="m-0 text-ink text-[13px] font-semibold">Set Meeting</p>
                <LetterRollNav ariaLabel="Set Meeting" links={[
                    { label: "Email", href: `mailto:${site.contact.email}` },
                    { label: "Whatsapp", href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}` },
                    { label: "Direct Call", href: phoneHref },
                ]} />
            </div>
            <div className="flex flex-col gap-2.5 items-end text-right max-[760px]:items-start max-[760px]:text-left">
                <p className="m-0 text-ink text-[13px] font-semibold">My Channels</p>
                <LetterRollNav ariaLabel="My Channels" links={socials.slice(0, 3).map((social) => ({ label: social.label, href: social.href, external: true }))} />
            </div>
        </div>
        <div className="border-t border-line mt-8.5 pt-5.5">
            <Image src="/images/logo-placeholder.svg" alt="Eyad Ryad logo placeholder" width={1600} height={260} className="block w-full h-auto" />
        </div>
        <div className="flex justify-center items-center pt-3.5 text-muted text-[11px] max-[760px]:gap-5">
            <p className="m-0 max-[760px]:max-w-55">Copyright © 2026 EYAD RYAD, All rights reserved</p>
        </div>
    </footer>;
}
