"use client";

import Image from "next/image";
import { useState } from "react";
import { site, type Project } from "@/content/site";

export function ProjectShowcase() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const activeProject = activeId ? site.projects.find((project) => project.id === activeId) : undefined;
    return <section
        className="pb-45 w-[min(100%-48px,1280px)] mx-auto max-[760px]:pb-30 max-[760px]:w-[min(100%-32px,1280px)]"
        aria-labelledby="projects-title"
    >
        <div className="flex justify-between items-end border-t border-line pt-3.5">
            <div><h2 id="projects-title" className="text-[clamp(52px,8vw,110px)] leading-[.86] mt-6.5 mb-0 tracking-[-.04em]">Signature Projects</h2></div>
        </div>
        <div className="group" onMouseLeave={() => setActiveId(null)}>
            <div className="relative overflow-hidden mt-14 w-[min(100%,1720px)] border-b border-line [container-type:inline-size] [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
                <div
                    className="flex w-max animate-project-tabs-scroll group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:[transform:none]"
                    role="tablist"
                    aria-label="Signature projects"
                >
                    {site.projects.map((project) => <ProjectTab key={project.id} project={project} active={project.id === activeId} onSelect={setActiveId} />)}
                    {site.projects.map((project) => <ProjectTab key={`${project.id}-clone`} project={project} active={project.id === activeId} onSelect={setActiveId} hidden />)}
                </div>
            </div>
            {activeProject && <div
                className="grid grid-cols-[1.15fr_.85fr] gap-[clamp(28px,6vw,100px)] pt-11.5 animate-project-detail-reveal motion-reduce:animate-none max-[760px]:grid-cols-1 max-[760px]:pt-7.5"
                role="tabpanel"
                aria-live="polite"
                aria-label={`${activeProject.name} project details`}
            >
                <div className="relative overflow-hidden">
                    <Image
                        key={activeProject.image}
                        src={activeProject.image}
                        alt={`${activeProject.name} project placeholder`}
                        width={1000}
                        height={750}
                        className="block w-full aspect-[4/3] object-cover grayscale animate-reveal motion-reduce:animate-none"
                    />
                    <span className="absolute left-4.5 bottom-4 text-ink uppercase tracking-[.14em] text-xs font-bold">{activeProject.name} / Case study</span>
                </div>
                <div className="self-center max-w-[430px]">
                    <h3 className="text-[clamp(42px,5vw,72px)] leading-[.92] tracking-[-.035em] mt-11 mb-6 max-[760px]:mt-7">{activeProject.title}</h3>
                    <p className="text-muted text-[15px] leading-[1.6]">{activeProject.description}</p>
                    <div className="grid grid-cols-3 gap-3 border-t border-line mt-12 pt-3.5">{activeProject.stats.map((stat) => <strong key={stat} className="text-xs font-medium">{stat}</strong>)}</div>
                </div>
            </div>}
        </div>
    </section>;
}

function ProjectTab({ project, active, onSelect, hidden }: { project: Project; active: boolean; onSelect: (id: string) => void; hidden?: boolean }) {
    return <button
        className={`grid place-items-center content-center gap-2.5 min-h-[92px] w-[25cqw] flex-none border-0 border-l border-line bg-transparent text-ink cursor-pointer opacity-[.38] transition-[opacity,background] duration-1000 ease-[ease] hover:opacity-100 hover:bg-[rgba(244,244,241,.05)] max-[760px]:w-[50cqw] max-[760px]:min-h-19${active ? " opacity-100 bg-[rgba(244,244,241,.05)]" : ""}`}
        type="button"
        role="tab"
        aria-selected={active}
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : 0}
        onClick={() => onSelect(project.id)}
        onMouseEnter={() => onSelect(project.id)}
        onFocus={() => onSelect(project.id)}
    >
        <Image src={project.logo} alt={`${project.name} project logo placeholder`} width={160} height={48} className="w-18 h-7 object-contain grayscale" />
        <span className="text-[10px] uppercase tracking-[.12em]">{project.name}</span>
    </button>;
}