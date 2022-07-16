import { Link } from "react-router-dom";
import Botoes from "../../componentes/Botoes";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Inputs from "../../componentes/InputsUsuario";
import TelaTextos from "../../componentes/TelaTextos";
import LayoutGeral from "../../Layouts/LayoutGeral";
import styles from "./login.module.scss";
import logoAzulMobile from "../../assets/svgs/LogoAzulMobile.svg";

export default function Login(){
    return(
        <>
        <LayoutGeral>
            <Header />
            <section className={styles.inicial__sessao}>
                <img src={logoAzulMobile} alt="logo AdotaPet" className={styles.logo}/>
                <TelaTextos texto="Já tem conta? Faça seu login:"/>  
            </section>
            <form action="" className={styles.login}>
                <div className={styles.login__container}>
                    <Inputs label='Email' type="email" holder="Escolha seu melhor email"/>
                    <Inputs label='Senha' type="password" holder="Crie uma senha"/>
                    <Link to="#" className={styles.login__senha}>Esqueci minha senha</Link>
                </div>
                <Botoes name="Entrar"/>
            </form>
        </LayoutGeral>
        <Footer />
        </>
    )
}