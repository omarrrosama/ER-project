import Image from 'next/image';
import { site } from '@/content/site';
import { LetterRollNav } from '@/components/LetterRollNav';

const phoneHref = `tel:${site.contact.whatsapp.replace(/\D/g, '')}`;

export function Footer() {
  const socials = [
    { label: 'Linkedin', href: 'https://www.linkedin.com' },
    ...site.contact.socials.map((social) => ({
      label: social.label,
      href: social.href,
    })),
  ];

  return (
    <footer
      className="border-line mx-auto w-[min(100%-48px,1280px)] border-t pt-7 pb-5
        max-[760px]:w-[min(100%-32px,1280px)]"
      id="contact"
    >
      <div className="flex justify-between gap-8 max-[760px]:flex-col max-[760px]:gap-7">
        <div className="flex flex-col gap-2.5">
          <p className="text-ink m-0 text-[13px] font-semibold">Set Meeting</p>
          <LetterRollNav
            ariaLabel="Set Meeting"
            links={[
              { label: 'Email', href: `mailto:${site.contact.email}` },
              {
                label: 'Whatsapp',
                href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`,
              },
              { label: 'Direct Call', href: phoneHref },
            ]}
          />
        </div>
        <div
          className="flex flex-col items-end gap-2.5 text-right max-[760px]:items-start
            max-[760px]:text-left"
        >
          <p className="text-ink m-0 text-xs font-semibold">My Channels</p>
          <LetterRollNav
            ariaLabel="My Channels"
            links={socials.slice(0, 3).map((social) => ({
              label: social.label,
              href: social.href,
              external: true,
            }))}
          />
        </div>
      </div>
      <div className="border-line mt-8.5 border-t pt-5.5">
        <Image
          src="/images/logo-placeholder.svg"
          alt="Eyad Ryad logo placeholder"
          width={1600}
          height={260}
          className="block h-auto w-full"
        />
      </div>
      <div className="text-muted flex items-center justify-center pt-3.5 text-[11px]">
        <p>Copyright © 2026 EYAD RYAD, All rights reserved</p>
      </div>
    </footer>
  );
}
