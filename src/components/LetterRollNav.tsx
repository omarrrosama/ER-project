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
    return <nav className="letter-roll-nav" aria-label={ariaLabel}>
        {links.map((link) => <a
            className={`letter-roll-link${link.active ? " is-active" : ""}`}
            href={link.href}
            key={link.label}
            aria-label={link.label}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
        >
            <span className="letter-roll-label" aria-hidden="true">
                {Array.from(link.label).map((letter, index) => <span className="letter-roll-letter" style={{ "--i": index } as CSSProperties} key={`${letter}-${index}`}>
                    <span>{letter === " " ? "\u00a0" : letter}</span>
                    <span>{letter === " " ? "\u00a0" : letter}</span>
                </span>)}
            </span>
        </a>)}
    </nav>;
}
