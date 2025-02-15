import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <Link to={`posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.cover}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.title}>{post.titulo}</h2>

        <button className={styles.readBtn}>Ler</button>
      </div>
    </Link>
  );
}
