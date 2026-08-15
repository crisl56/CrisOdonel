import type {IconType} from "react-icons";
import styles from "./SkillsPrograms.module.css"

import {
    SiCplusplus, SiSharp, SiJavascript, SiTypescript, SiReact, SiGit,
    SiUnity, SiUnrealengine, SiGithub, SiRider
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {useEffect, useRef, useState} from "react";

interface Skill {
    name: string;
    icon: IconType;
}

const skills: Skill[] = [
    { name: "C++", icon: SiCplusplus},
    { name: "C#", icon: SiSharp},
    { name: "JavaScript", icon: SiJavascript},
    { name: "TypeScript", icon: SiTypescript},
    { name: "React", icon: SiReact},
    { name: "Git", icon: SiGit}
]

const programs: Skill[] = [
    { name: "Unreal", icon: SiUnrealengine},
    { name: "Unity", icon: SiUnity},
    { name: "GitHub", icon: SiGithub},
    { name: "Rider", icon: SiRider},
    { name: "VS Code", icon: VscVscode}
]

export default function SkillsPrograms() {
    const [isVisible, setIsVisible] = useState(false);
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


    return(
        <section
            id="skills"
            ref={sectionRef}
            className={`${styles.skills} ${isVisible ? styles.visible : ''}`}
        >
            <h1 className={styles.heading}>Skills & Programs</h1>

            <div className={styles.group}>
                <h2 className={styles.groupLabel}>Skills</h2>
                <div className={styles.row}>
                    {skills.map((skill) => (
                        <div key={skill.name} className={styles.item}>
                            <skill.icon size={40} className={styles.icon} />
                            <p className={styles.itemLabel}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.group}>
                <h2 className={styles.groupLabel}>Programs</h2>
                <div className={styles.row}>
                    {programs.map((program) => (
                        <div key={program.name} className={styles.item}>
                            <program.icon size={40} className={styles.icon} />
                            <p className={styles.itemLabel}>{program.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}