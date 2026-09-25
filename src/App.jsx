import { createElement, useEffect, useState } from "react";
import {
    FaCodepen,
    FaCoffee,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
    FaEnvelope,
} from "react-icons/fa";
import { FiArrowUp, FiDownload, FiMenu, FiX } from "react-icons/fi";
import Resume from "./resume";
import "./index.css";

const connectLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
];

const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <div className="resume-app">
            <header className="resume-header">
                <a className="resume-brand" href="#top" aria-label="Resume home">
                    <img src={import.meta.env.BASE_URL + "logo.png"} alt="Ashish Ranjan logo" />
                    <span>
                        <small>PUBLIC RESUME</small>
                        <strong>Ashish Ranjan</strong>
                    </span>
                </a>

                <div className="resume-actions">
                    <a className="resume-download" href={import.meta.env.BASE_URL + "downloads/Ashish_Ranjan_Resume.pdf"} download>
                        <FiDownload />
                        <span>Download PDF</span>
                    </a>
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    <button
                        className="resume-menu-button"
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
                    className={"resume-mobile-menu" + (menuOpen ? " is-open" : "")}
                    aria-hidden={!menuOpen}
                >
                    <a href={import.meta.env.BASE_URL + "downloads/Ashish_Ranjan_Resume.pdf"} download onClick={() => setMenuOpen(false)}>
                        <FiDownload /> Download PDF
                    </a>
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                        <FaGlobe /> Portfolio
                    </a>
                </nav>
            </header>

            <main id="top" className="resume-content">
                <Resume />
            </main>

            <footer className="resume-footer">
                <div className="resume-footer-inner">
                    <span>
                        Copyright &copy; {new Date().getFullYear()}{" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
                    </span>
                    <div className="resume-footer-links">
                        {[...connectLinks, ...supportLinks].map(({ label, href, icon }) => (
                            <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                                {createElement(icon)}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

            <button
                className="resume-top-button"
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                title="Back to top"
            >
                <FiArrowUp />
            </button>
        </div>
    );
};

export default App;
