import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/about">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
}
