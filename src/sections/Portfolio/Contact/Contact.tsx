import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

import styles from "./Contact.module.css";

export default function Contact() {
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

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={`${styles.contact} ${isVisible ? styles.visible : ''}`}
        >
            <section className={styles.ContactCardBlock}>
                <span className={styles.corner} />
                <span className={styles.corner} />
                <span className={styles.corner} />
                <span className={styles.corner} />

                <h1 className={styles.heading}>Contact</h1>

                <div className={styles.contactBlock}>
                    <h2 className={styles.name}>Cris Laurence Odonel</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <a
                                href="https://www.linkedin.com/in/crisodonel/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={22} className={styles.icon} />
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a
                                href="https://github.com/crisl56"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={22} className={styles.icon} />
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <MdEmail size={22} className={styles.icon} />
                            <span>crislaurenceodonel@gmail.com</span>
                        </li>
                        <li className={styles.listItem}>
                            <MdPhone size={22} className={styles.icon} />
                            <span>(+1) 431-337-1111</span>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

