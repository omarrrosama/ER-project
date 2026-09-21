'use client';

import Image from 'next/image';
import { useState } from 'react';
import { site, type Project } from '@/content/site';

export function ProjectShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = activeId
    ? site.projects.find((project) => project.id === activeId)
    : undefined;
  return (
    <section
      className="mx-auto w-[min(100%-48px,1280px)] pb-27.5 max-[760px]:w-[min(100%-32px,1280px)]
        max-[760px]:pb-17.5"
      aria-labelledby="projects-title"
    >
      <div className="border-line flex items-end justify-between border-t pt-3.5">
        <div>
          <h2
            id="projects-title"
            className="mt-6.5 mb-0 text-[clamp(52px,8vw,110px)] leading-[.86] tracking-[-.04em]"
          >
            Signature Projects
          </h2>
        </div>
      </div>
      <div className="group" onMouseLeave={() => setActiveId(null)}>
        <div
          className="border-line [container-type:inline-size] relative mt-14 w-[min(100%,1720px)]
            overflow-hidden border-b
            mask-[linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]"
        >
          <div
            className="animate-project-tabs-scroll flex w-max
              group-focus-within:[animation-play-state:paused]
              group-hover:[animation-play-state:paused] motion-reduce:w-full
              motion-reduce:transform-none motion-reduce:animate-none motion-reduce:flex-wrap"
            role="tablist"
            aria-label="Signature projects"
          >
            {site.projects.map((project) => (
              <ProjectTab
                key={project.id}
                project={project}
                active={project.id === activeId}
                onSelect={setActiveId}
              />
            ))}
            {site.projects.map((project) => (
              <ProjectTab
                key={`${project.id}-clone`}
                project={project}
                active={project.id === activeId}
                onSelect={setActiveId}
                hidden
              />
            ))}
          </div>
        </div>
        {activeProject && (
          <div
            className="animate-project-detail-reveal grid grid-cols-[1.15fr_.85fr]
              gap-[clamp(28px,6vw,100px)] pt-11.5 motion-reduce:animate-none max-[760px]:grid-cols-1
              max-[760px]:pt-7.5"
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
                className="animate-reveal block aspect-4/3 w-full object-cover grayscale
                  motion-reduce:animate-none"
              />
              <span
                className="text-ink absolute bottom-4 left-4.5 text-xs font-bold tracking-[.14em]
                  uppercase"
              >
                {activeProject.name} / Case study
              </span>
            </div>
            <div className="max-w-107.5 self-center">
              <h3
                className="mt-11 mb-6 text-[clamp(42px,5vw,72px)] leading-[.92] tracking-[-.035em]
                  max-[760px]:mt-7"
              >
                {activeProject.title}
              </h3>
              <p className="text-muted text-[15px] leading-[1.6]">{activeProject.description}</p>
              <div className="border-line mt-12 grid grid-cols-3 gap-3 border-t pt-3.5">
                {activeProject.stats.map((stat) => (
                  <strong key={stat} className="text-xs font-medium">
                    {stat}
                  </strong>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectTab({
  project,
  active,
  onSelect,
  hidden,
}: {
  project: Project;
  active: boolean;
  onSelect: (id: string) => void;
  hidden?: boolean;
}) {
  return (
    <button
      className={`border-line text-ink grid min-h-32 w-[25cqw] flex-none cursor-pointer
        place-items-center content-center gap-2.5 border-0 border-l bg-transparent opacity-[.38]
        transition-[opacity,background] duration-1000 ease-[ease] hover:bg-[rgba(244,244,241,.05)]
        hover:opacity-100 max-[760px]:w-[50cqw]
        max-[760px]:min-h-19${active ? 'bg-[rgba(244,244,241,.05)] opacity-100' : ''}`}
      type="button"
      role="tab"
      aria-selected={active}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      onClick={() => onSelect(project.id)}
      onMouseEnter={() => onSelect(project.id)}
      onFocus={() => onSelect(project.id)}
    >
      <Image
        src={project.logo}
        alt={`${project.name} project logo placeholder`}
        width={160}
        height={48}
        className="h-7 w-18 object-contain grayscale"
      />
      <span className="text-[10px] tracking-[.12em] uppercase">{project.name}</span>
    </button>
  );
}
