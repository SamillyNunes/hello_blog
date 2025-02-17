import MainButton from "components/AppButton";
import styles from "./NotFound.module.css";
import error404 from "assets/erro_404.png";

export default function NotFound() {
  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>

        <h1 className={styles.title}>Ops! Página não encontrada.</h1>

        <p className={styles.paragraph}>
          Tem certeza que era isso que você estava procurando?
        </p>

        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className={styles.btnContent}>
            <MainButton size='lg'>Voltar</MainButton>
        </div>

        <img
          className={styles.dogImg}
          src={error404}
          alt="Cachorro de óculos e vestido como um humano"
        />
      </div>
      <div className={styles.whiteSpace}></div>
    </>
  );
}
