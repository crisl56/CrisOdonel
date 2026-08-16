import {useState} from "react";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

interface NavbarProps {
    label: string;
    to: string;
}

const navItems: NavbarProps[] = [
    { label: "Home", to: "/#home" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
];

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHireClick = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

        const link = document.createElement("a");
        link.href = "/CrisOdonel/CrisResume2026.pdf";
        link.download ="CrisOdonel_Resume.pdf";
        link.click();

        setMenuOpen(false);
    }

    return(
        <nav className={styles.navbar}>
            <a href="https://crisl56.github.io/CrisOdonel/" className={styles.logo}>
                Cris Odonel
            </a>

            <button
                className={styles.menuIcon}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                {navItems.map((NavbarProps) => (
                    <li key={NavbarProps.label}>
                        <HashLink smooth to={NavbarProps.to} onClick={() => setMenuOpen(false)}>
                            {NavbarProps.label}
                        </HashLink>
                    </li>
                ))}
            </ul>

            <div className={styles.navButtons}>
                <button className={styles.hireBtn} onClick={handleHireClick}>
                    RÉSUMÉ
                </button>
            </div>
        </nav>
    )
}