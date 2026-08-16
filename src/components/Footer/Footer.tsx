import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <section id="footer">
            <div className={styles.footer}>
                <p className={styles.copyright}>© 2026-2027 Cris Odonel | All Rights Reserved</p>
            </div>
        </section>
    )
}