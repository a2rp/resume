import { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const resumePdfUrl = "https://github.com/a2rp/resume/releases/latest/download/Ashish_Ranjan_Resume.pdf";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const mobileViewport = window.matchMedia("(max-width: 620px)");
        if (!menuOpen || !mobileViewport.matches) {
            document.body.style.overflow = "";
            return undefined;
        }

        document.body.style.overflow = "hidden";
        const closeMenuOnDesktop = (event) => {
            if (!event.matches) {
                setMenuOpen(false);
            }
        };
        mobileViewport.addEventListener("change", closeMenuOnDesktop);

        return () => {
            mobileViewport.removeEventListener("change", closeMenuOnDesktop);
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <Link className={styles.brand} to="/" aria-label="Resume home">
                <img src={import.meta.env.BASE_URL + "logo.png"} alt="Ashish Ranjan logo" />
                <span>
                    <small>PUBLIC RESUME</small>
                    <strong>Ashish Ranjan</strong>
                </span>
            </Link>

            <div className={styles.actions}>
                <a className={`${styles.action} ${styles.download}`} href={resumePdfUrl} download>
                    <FiDownload />
                    <span>Download PDF</span>
                </a>
                <Link className={`${styles.action} ${styles.resumeOnly}`} to="/resume-only">
                    Resume Only
                </Link>
                <a className={`${styles.action} ${styles.portfolio}`} href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Portfolio
                </a>
                <button
                    className={styles.menuButton}
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-expanded={menuOpen}
                    aria-controls="resume-mobile-menu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <nav
                id="resume-mobile-menu"
                className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
                aria-hidden={!menuOpen}
            >
                <a className={styles.mobileMenuLink} href={resumePdfUrl} download onClick={closeMenu}>
                    <FiDownload /> Download PDF
                </a>
                <Link className={styles.mobileMenuLink} to="/resume-only" onClick={closeMenu}>
                    Resume Only
                </Link>
                <a className={styles.mobileMenuLink} href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    <FaGlobe /> Portfolio
                </a>
            </nav>
        </header>
    );
};

export default Header;
