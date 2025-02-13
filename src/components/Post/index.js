import styles from './Post.module.css';

export default function Post({post}){
    return (
        <div className={styles.post}>
            <img
                className={styles.cover}
                src={`/assets/posts/${post.id}/capa.png`}
                alt='Imagem de capa do post'
            />

            <h2 className={styles.title}>{ post.titulo }</h2>

            <button className={styles.readBtn}>Ler</button>

        </div>
    );
}