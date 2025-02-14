import styles from "./ModelPost.module.css";

export default function ModelPost({ title, coverImg, children }) {
  return (
    <article className={styles.container}>
      <div
        className={styles.cover}
        style={{ backgroundImage: `url(${coverImg})` }}
      ></div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentContainer}>{children}</div>
    </article>
  );
}
