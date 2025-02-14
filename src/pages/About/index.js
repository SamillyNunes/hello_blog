import styles from "./About.module.css";

import ModelPost from "components/ModelPost";
import coverPhoto from "assets/sobre_mim_capa.png";
import myPhoto from "assets/foto.jpg";

export default function About() {
  return (
    <ModelPost title="Sobre mim" coverImg={coverPhoto}>
      <h3 className={styles.subtitle}>
        Olá, eu sou a Samilly, mas pode me chamar de Sami.
      </h3>

      <img
        src={myPhoto}
        alt="Foto da Samilly sorrindo"
        className={styles.myPhoto}
      />

      <p className={styles.paragraph}>
        👋 Olá! Meu nome é Samilly Nunes e sou desenvolvedora front-end
        apaixonada por criar interfaces fluidas, intuitivas e bem estruturadas.
        Desde que me formei em Ciência da Computação, venho explorando o mundo
        do desenvolvimento web e mobile, sempre em busca de aprimorar minhas
        habilidades e entregar soluções de qualidade.
      </p>

      <p className={styles.paragraph}>
        Minha experiência profissional inclui o desenvolvimento de aplicativos e
        plataformas interativas utilizando Flutter, React.js e Vue.js. Já atuei
        em projetos desafiadores, como a implementação do aplicativo de um time
        na Intelbras, além de ter trabalhado como freelancer, desenvolvendo
        soluções personalizadas para diferentes clientes.
      </p>

      <p className={styles.paragraph}>
        Tenho um olhar atento para design de interfaces, experiência do usuário
        e otimização de performance, sempre buscando unir tecnologia e
        usabilidade. Gosto de resolver problemas e encontrar maneiras criativas
        de tornar aplicações mais eficientes e acessíveis.
      </p>

      <p className={styles.paragraph}>
        Além da programação, sou fã de doramas, filmes de espionagem e ação, e
        sempre que posso, dedico um tempo aos treinos na academia. Acredito que
        equilíbrio entre trabalho, lazer e aprendizado é essencial para se
        manter motivada e criativa.
      </p>

      <p className={styles.paragraph}>
        Aqui no blog, compartilho minhas experiências, desafios e aprendizados
        no mundo do desenvolvimento. Se você também é apaixonado por tecnologia
        ou quer trocar ideias sobre código, fique à vontade para explorar o
        conteúdo e me mandar uma mensagem. Vamos construir juntos! 🚀
      </p>
    </ModelPost>
  );
}
