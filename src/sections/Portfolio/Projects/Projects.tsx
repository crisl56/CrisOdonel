import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "./projectsData";

const INITIAL_VISIBLE = 3;

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
    const hasMore = projects.length > INITIAL_VISIBLE;

    return (
        <section
            id="projects"
            ref={sectionRef}
            className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
        >
            <h1 className={styles.heading}>Projects</h1>

            <div className={styles.grid}>
                {visibleProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={setSelectedProject}
                    />
                ))}
            </div>

            {hasMore && (
                <button
                    type="button"
                    className={styles.expandButton}
                    onClick={() => setShowAll((prev) => !prev)}
                >
                    {showAll ? "Show less" : "Show more"}
                </button>
            )}

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
