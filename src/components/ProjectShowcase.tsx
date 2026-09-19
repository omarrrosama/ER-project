"use client";

import Image from "next/image";
import { useState } from "react";
import { site, type Project } from "@/content/site";

export function ProjectShowcase() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const activeProject = activeId ? site.projects.find((project) => project.id === activeId) : undefined;
    return <section className="showcase-section page-shell" aria-labelledby="projects-title"><div className="section-heading showcase-heading"><div><h2 id="projects-title">Signature Projects</h2></div></div>
        <div className="showcase-interactive" onMouseLeave={() => setActiveId(null)}>
            <div className="project-tabs" role="tablist" aria-label="Signature projects">{site.projects.map((project) => <ProjectTab key={project.id} project={project} active={project.id === activeId} onSelect={setActiveId} />)}</div>
            {activeProject && <div className="project-detail" role="tabpanel" aria-live="polite" aria-label={`${activeProject.name} project details`}><div className="project-image-wrap"><Image key={activeProject.image} src={activeProject.image} alt={`${activeProject.name} project placeholder`} width={1000} height={750} /><span className="project-image-label">{activeProject.name} / Case study</span></div><div className="project-copy">
                <h3>{activeProject.title}</h3><p>{activeProject.description}</p><div className="stats-grid">{activeProject.stats.map((stat) => <strong key={stat}>{stat}</strong>)}</div>
            </div></div>}
        </div>
    </section>;
}

function ProjectTab({ project, active, onSelect }: { project: Project; active: boolean; onSelect: (id: string) => void }) {
    return <button className={`project-tab${active ? " is-active" : ""}`} type="button" role="tab" aria-selected={active} tabIndex={0} onClick={() => onSelect(project.id)} onMouseEnter={() => onSelect(project.id)} onFocus={() => onSelect(project.id)}><Image src={project.logo} alt={`${project.name} project logo placeholder`} width={160} height={48} /><span>{project.name}</span></button>;
}