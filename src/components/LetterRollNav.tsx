"use client";

import type { CSSProperties } from "react";

type LetterRollLink = {
    label: string;
    href: string;
    external?: boolean;
    active?: boolean;
};

type LetterRollNavProps = {
    ariaLabel: string;
    links: readonly LetterRollLink[];
};

export function LetterRollNav({ ariaLabel, links }: LetterRollNavProps) {
    return <nav
        className="flex gap-4.5 transition-opacity duration-200 ease-out [&:has(a:hover)_a:not(:hover):not(.is-active)]:opacity-50 [&:has(a:focus-visible)_a:not(:focus-visible):not(.is-active)]:opacity-50 max-[760px]:flex-wrap max-[760px]:gap-x-4.5 max-[760px]:gap-y-3"
        aria-label={ariaLabel}
    >
        {links.map((link) => <a
            className={`inline-block text-ink text-[13px] leading-[1.3] uppercase whitespace-nowrap opacity-100 transition-opacity duration-200 ease-out group focus-visible:outline focus-visible:outline-ink focus-visible:outline-offset-[5px]${link.active ? " is-active" : ""}`}
            href={link.href}
            key={link.label}
            aria-label={link.label}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
        >
            <span className="inline-flex whitespace-nowrap" aria-hidden="true">
                {Array.from(link.label).map((letter, index) => <span className="inline-block h-[1.3em] overflow-hidden align-bottom" style={{ "--i": index } as CSSProperties} key={`${letter}-${index}`}>
                    <span className="block h-[1.3em] leading-[1.3em] translate-y-0 transition-transform duration-300 ease-[cubic-bezier(.76,0,.24,1)] delay-[calc(var(--i)*25ms)] motion-reduce:transition-none group-hover:-translate-y-full group-focus-visible:-translate-y-full">{letter === " " ? "\u00a0" : letter}</span>
                    <span className="block h-[1.3em] leading-[1.3em] translate-y-0 transition-transform duration-300 ease-[cubic-bezier(.76,0,.24,1)] delay-[calc(var(--i)*25ms)] motion-reduce:transition-none group-hover:-translate-y-full group-focus-visible:-translate-y-full">{letter === " " ? "\u00a0" : letter}</span>
                </span>)}
            </span>
        </a>)}
    </nav>;
}
