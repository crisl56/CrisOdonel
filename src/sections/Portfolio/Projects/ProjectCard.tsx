import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import type { Project } from "./projectsData";

interface ProjectCardProps {
    project: Project;
    onSelect: (project: Project) => void;
}

const SWAP_INTERVAL_MS = 700;

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
    const [thumbIndex, setThumbIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startCycling = () => {
        if (project.thumbnails.length <= 1) return;
        // Guard against a second interval stacking on top of an existing one.

        if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
        }
        intervalRef.current = window.setInterval(() => {
            setThumbIndex((prev) => (prev + 1) % project.thumbnails.length);
        }, SWAP_INTERVAL_MS);
    };

    const stopCycling = () => {
        if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setThumbIndex(0);
    };

    useEffect(() => stopCycling, []);

    return (
        <button
            type="button"
            className={styles.card}
            onMouseEnter={startCycling}
            onMouseLeave={stopCycling}
            onFocus={startCycling}
            onBlur={stopCycling}
            onClick={() => {
                stopCycling();
                onSelect(project);
            }}
        >
            <div className={styles.cardThumbWrap}>
                {project.thumbnails.map((src, i) => (
                    <div
                        key={src}
                        className={`${styles.cardThumb} ${i === thumbIndex ? styles.cardThumbActive : ''}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            <div className={styles.cardMeta}>
                <h3 className={styles.cardName}>{project.name}</h3>
                <p className={styles.cardRole}>{project.role}</p>
            </div>
        </button>
    );
}