import styles from "./styles.module.css";

const Loader = ({ label = "Loading resume..." }) => (
    <div className={styles.loader} role="status" aria-live="polite">
        <span className={styles.spinner} aria-hidden="true" />
        <span>{label}</span>
    </div>
);

export default Loader;
