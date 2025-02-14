import Banner from "components/Banner";
import posts from "json/posts.json";
import styles from "./Home.module.css";
import Post from "components/Post";

export default function Home() {
  return (
    <main>
      <Banner />

      <ul className={styles.posts}>
        {posts.map((p)=> (
            <li key={p.id}>
                <Post post={p} />
            </li>
        ))}
      </ul>
    </main>
  );
}
