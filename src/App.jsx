import { createElement } from "react";
import { FaCoffee, FaFacebook, FaGithub, FaGlobe, FaHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import Resume from "./resume";
import "./index.css";

const connectLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
];

const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const App = () => (
    <div className="resume-app">
        <header className="resume-header">
            <a className="resume-brand" href="#top" aria-label="Resume home">
                <img src="/resume/logo.png" alt="Ashish Ranjan logo" />
                <span><small>PUBLIC RESUME</small><strong>Ashish Ranjan</strong></span>
            </a>
            <div className="resume-actions">
                <a className="resume-download" href="/resume/downloads/Ashish_Ranjan_Resume.pdf" download>Download PDF</a>
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Portfolio ↗</a>
            </div>
        </header>

        <main id="top" className="resume-content">
            <Resume />
        </main>

        <footer className="resume-footer">
            <div className="resume-footer-inner">
                <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                <div className="resume-footer-links">
                    {[...connectLinks, ...supportLinks].map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{createElement(icon)}</a>)}
                </div>
            </div>
        </footer>
    </div>
);

export default App;
