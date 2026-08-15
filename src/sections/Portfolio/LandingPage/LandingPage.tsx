import styles from "./LandingPage.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

const projectMedia: string[] = [
    "/projects/NekoFishTrailer.mp4",
    "/projects/Tachyon_Trailer_Final01.mp4",
];

const isVideo = (src: string) =>
    VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));

export default function LandingPage() {
    return (
        <section id="home" className={styles.landing}>
            <div className={styles.bgLayer} aria-hidden="true">
                {projectMedia.map((src, i) => {
                    const delay = `${i * (28 / projectMedia.length)}s`;
                    return isVideo(src) ? (
                        <video
                            key={src}
                            className={styles.bgTile}
                            style={{ animationDelay: delay }}
                            src={src}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <div
                            key={src}
                            className={styles.bgTile}
                            style={{
                                backgroundImage: `url(${src})`,
                                animationDelay: delay,
                            }}
                        />
                    );
                })}
            </div>

            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
                <h1 className={styles.landingTitle}>Cris Laurence Odonel</h1>
                <h2 className={styles.jobTitle}>Software &amp; Gameplay Programmer</h2>

                <ul className={styles.contactList}>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/crisodonel/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin aria-hidden="true" />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/crisl56"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub aria-hidden="true" />
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:crislaurenceodonel@gmail.com">
                            <FiMail aria-hidden="true" />
                            <span>crislaurenceodonel@gmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+14313371111">
                            <FiPhone aria-hidden="true" />
                            <span>(+1) 431-337-1111</span>
                        </a>
                    </li>
                </ul>
            </div>

        </section>

    )
}

