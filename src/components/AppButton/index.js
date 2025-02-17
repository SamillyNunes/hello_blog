import styles from "./MainButton.module.css";

export default function MainButton({ children, size }) {
  return (
    <button className={`${styles.btn} ${styles[size]}`}>{children}</button>
  );
}
