import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Projects.module.css";
import type { Project } from "./projectsData";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label={project.name}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.modalClose}
                    onClick={onClose}
                    aria-label="Close project details"
                >
                    &times;
                </button>

                <div className={styles.modalScroll}>
                    <div className={styles.screenshotGrid}>
                        {project.screenshots.map((src) => (
                            <div
                                key={src}
                                className={styles.screenshot}
                                style={{ backgroundImage: `url(${src})` }}
                            />
                        ))}
                    </div>

                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalName}>{project.name}</h2>
                        <p className={styles.modalRole}>{project.role}</p>

                        <p className={styles.description}>{project.description}</p>

                        <dl className={styles.metaRow}>
                            <div className={styles.metaItem}>
                                <dt>Duration</dt>
                                <dd>{project.duration}</dd>
                            </div>
                            <div className={styles.metaItem}>
                                <dt>Team size</dt>
                                <dd>{project.teamSize}</dd>
                            </div>
                        </dl>

                        <ul className={styles.modalTags}>
                            {project.tags.map((tag) => (
                                <li key={tag} className={styles.modalTag}>{tag}</li>
                            ))}
                        </ul>

                        <div className={styles.linkRow}>
                            {project.publishedLink && (
                                <a
                                    className={styles.publishedLink}
                                    href={project.publishedLink.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    View on {project.publishedLink.label} &#8599;
                                </a>
                            )}

                            {project.videoUrl && (
                                <a
                                    className={styles.videoLink}
                                    href={project.videoUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Watch project video &#8599;
                                </a>
                            )}
                        </div>
                    </div>

                    <div className={styles.modalBody}>
                        <div className={styles.caseStudy}>
                            {project.caseStudy.map((section) => (
                                <div key={section.heading} className={styles.caseStudySection}>
                                    <h3 className={styles.caseStudyHeading}>{section.heading}</h3>
                                    {section.body.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}