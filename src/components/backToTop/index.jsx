import { FiArrowUp } from "react-icons/fi";
import styles from "./styles.module.css";

const BackToTop = () => (
    <button
        className={styles.button}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
    >
        <FiArrowUp />
    </button>
);

export default BackToTop;
