import BackToTop from "../../components/backToTop";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "./styles.module.css";

const SiteLayout = ({ children }) => (
    <div className={styles.app}>
        <Header />
        <main id="top" className={styles.content}>
            {children}
        </main>
        <Footer />
        <BackToTop />
    </div>
);

export default SiteLayout;
