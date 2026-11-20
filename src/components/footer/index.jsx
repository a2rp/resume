import { createElement } from "react";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import styles from "./styles.module.css";

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

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <span>
                Copyright &copy; {new Date().getFullYear()}{" "}
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
            </span>
            <div className={styles.links}>
                {[...connectLinks, ...supportLinks].map(({ label, href, icon }) => (
                    <a className={styles.link} href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                        {createElement(icon)}
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
