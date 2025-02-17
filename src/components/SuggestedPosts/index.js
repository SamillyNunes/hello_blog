import PostCard from "components/PostCard";
import styles from './SuggestedPosts.module.css';

export default function SuggestedPosts({ posts }) {
  return (
    <>
      <h1 className={styles.title}>Outros posts que você pode gostar:</h1>
      <ul className={styles.otherPosts}>
        {posts.map((p) => (
          <PostCard post={p} />
        ))}
      </ul>
    </>
  );
}
