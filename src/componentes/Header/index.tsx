import styles from "./header.module.scss";
import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__container}>
                <Link to="#">
                    <img src="../../assets/svgs/LogoMenorCantoSupeiorEsquerdo.svg" alt="ícone logo" className={styles.cabecalho__logo} />
                </Link>
                <Link to="#">
                    <img src="../../assets/svgs/Casa.svg" alt="ícone casa" className={styles.cabecalho__icone} />
                </Link>
                <Link to="/mensagem">
                    <img src="../../assets/svgs/Mensagens.svg" alt="ícone mensagem" className={styles.cabecalho__icone} />
                </Link>
            </div>
        </header>
    )
}