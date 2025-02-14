import posts from "json/posts.json";
import styles from "./Home.module.css";
import PostCard from "components/PostCard";

export default function Home() {
  return (
    <ul className={styles.posts}>
      {posts.map((p) => (
        <li key={p.id}>
          <PostCard post={p} />
        </li>
      ))}
    </ul>
  );
}
