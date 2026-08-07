import {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className={styles.navbbar}>
            <a href="/" className={styles.logo}>
                Logo
            </a>
            <div className={styles.menuIcon} onClick={()=>setMenuOpen(!menuOpen)}>
                {/*TODO: Icon of menu here or svg element*/}
            </div>
            <ul className={`$styles.navLinks ${menuOpen ? styles.active : ""}`}>
                <li>
                    <NavLink to="/"
                    className={({isActive}) => (isActive ? styles.activeLink : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About"
                     className={({isActive}) => (isActive ? styles.activeLink : "")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Skills"
                         className={({isActive}) => (isActive ? styles.activeLink : "")}>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Projects"
                     className={({isActive}) => (isActive ? styles.activeLink : "")}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Experience"
                     className={({isActive}) => (isActive ? styles.activeLink : "")}>
                        Experience
                    </NavLink>
                </li>
            </ul>
            <div className={styles.navButtons}>
                {/*TODO: Experiment if this should be a link to the bottom instead*/}
                <button className={styles.hireBtn}>Hire Me</button>
            </div>
        </nav>
    )
}