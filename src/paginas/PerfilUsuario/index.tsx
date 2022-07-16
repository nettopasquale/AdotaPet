import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import TelaTextos from "../../componentes/TelaTextos";
import LayoutGeral from "../../Layouts/LayoutGeral";
import styles from "./perfilUsuario.module.scss";
import styled from "../../componentes/InputsUsuario/InputsPerfil/inputPerfil.module.scss";
import usuarioIcone from "../../assets/svgs/Usuário.svg"
import Botoes from "../../componentes/Botoes";
import InputsPerfil from "../../componentes/InputsUsuario/InputsPerfil";

export default function PerfilUsuario(){
    return(
        <>
        <LayoutGeral>
            <Header />
            <TelaTextos texto="Esse é o perfil que aparece para responsáveis ou ONGs
            que recebem sua mensagem." />
            <section className={styles.perfil__sessao}>
                <form action="" className={styles.perfil__form}>
                    <h2 className={styles.perfil__titulo_Principal}>Perfil</h2>
                    <label className={styled.perfil__titulo}>Foto</label>
                    <img src={usuarioIcone} alt="ícone usuário" className={styles.perfil__usuario}/>
                    <p className={styles.perfil__texto}>Clique na foto para editar</p>
                    <InputsPerfil label="Nome" type="text" holder="Insira seu nome completo"/>
                    <InputsPerfil label="Telefone" type="number" holder="Insira seu telefone e/ou whatsapp"/>
                    <InputsPerfil label="Cidade" type="text" holder="ex: São Paulo"/>
                    <label className={styled.perfil__titulo}>Sobre</label>
                    <textarea name="Sobre" id="idSobre" cols={30} rows={50} className={styles.perfil__input}
                    placeholder="At vero eos et accusamus et 
                    iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                     dolores et quas molestias excepturi sint occaecati."></textarea>
                    {/* <InputsPerfil label="Sobre" type="text" holder="At vero eos et accusamus et iusto odio dignissimos 
                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                    excepturi sint occaecati."/> */}
                    <Botoes  name="Salvar"/>
                </form>
            </section>
        </LayoutGeral>
        <Footer />
        </>
    )
}