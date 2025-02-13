import styles from "./Banner.module.css";
import colorfulCircle from "assets/circulo_colorido.png";
import myPhoto from "assets/foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Olá, Mundo!</h1>

        <p className={styles.description}>
          Bem-vindo(a) ao meu espaço profissional! Me chamo Samilly Nunes, sou
          Desenvolvedora Front-End, e aqui compartilho diversos conhecimentos e
          curiosidades do mundo Tech. Espero te ajudar em algo! =D
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles.colorfulCircle}
          src={colorfulCircle}
          aria-hidden={true}
          alt=""
        />
        
        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt="Foto da Samilly sorrindo"
        />
      </div>
    </div>
  );
}
