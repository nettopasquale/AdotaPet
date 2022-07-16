import Botoes from '../../componentes/Botoes'
import Footer from '../../componentes/Footer'
import Header from '../../componentes/Header'
import Inputs from '../../componentes/InputsUsuario'
import TelaTextos from '../../componentes/TelaTextos'
import LayoutGeral from '../../Layouts/LayoutGeral'
import styles from './cadastro.module.scss'

import logoAzulMobile from "../../assets/svgs/LogoAzulMobile.svg";

export default function Cadastro(){
    return(
        <>
        <LayoutGeral>
            <Header/>
            <section className={styles.inicial__sessao}>
            <img src={logoAzulMobile} alt="logo AdotaPet" className={styles.logo}/>
                    <TelaTextos texto="Ainda não tem cadastro?"/>  
                    <TelaTextos texto="Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"/>  
            </section>
            <section className={styles.cadastro}>
                <form action="" className={styles.cadastro__usuario}>
                    <Inputs label='Email' type="email" holder="Escolha seu melhor email"/>
                    <Inputs label='Nome' type="nome" holder="Digite seu nome completo"/>
                    <Inputs label='Senha' type="password" holder="Crie uma senha"/>
                    <Inputs label='Confirma sua senha' type="password" holder="Repita a senha criada acima"/>
                </form>
                <Botoes name='Cadastrar'/>
            </section>
        </LayoutGeral>
        <Footer/>
        </>
    )
}