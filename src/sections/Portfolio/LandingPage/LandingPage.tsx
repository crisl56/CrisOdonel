import styles from "./LandingPage.module.css";

const projectImages: string[] = [
    "/projects/project-1.jpg",
    "/projects/project-2.jpg",
];

export default function LandingPage() {
    return (
        <section id="home" className={styles.landing}>
            <h1 className={"LandingTitle"}>Cris Laurence Odonel</h1>
            <h2 className={"JobTitle"}>Software & Gameplay Programmer</h2>
            <ul>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>crislaurenceodonel@gmail.com</li>
                <li>(+1) 431-337-1111</li>
            </ul>
        </section>

    )
}

