import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu(){
    return (
        <header>
            <nav className={styles.navigation}>
                <Link to='/' className={styles.link}>
                    Inicio
                </Link>
                <Link to='/about' className={styles.link}>
                    Sobre Mim
                </Link>
            </nav>
        </header>
    );
}