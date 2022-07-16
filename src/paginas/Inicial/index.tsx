import Footer from '../../componentes/Footer';
import Header from '../../componentes/Header';
import styles from './inicial.module.scss';
import logoBrancoMobile from "../../assets/svgs/LogoMobile.svg";
import LayoutInicial from '../../Layouts/LayoutInicial';
import {Link} from "react-router-dom";


export default function Inicial(){
    return (
        <>
        <LayoutInicial>
            <Header />
            <section className={styles.inicial__sessao}>
                <div className={styles.inicial__descricao}>
                    <img src={logoBrancoMobile} alt="logo AdotaPet" className={styles.logo}/>
                    <h2 className={styles.tela__titulo}>Boas-vindas!</h2>
                    <p className={styles.tela__texto}>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>
                </div>
                <div className={styles.botao__container}>
                    <Link to="/login" className={styles.botao__cadastro}>Já tenho conta</Link>
                    <Link to="/cadastro" className={styles.botao__cadastro}>Quero me cadastrar</Link>
                </div>
            </section>
        </LayoutInicial>
        <Footer />
        </>
    )
}