import Botoes from "../../componentes/Botoes";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import InputsMensagem from "../../componentes/InputsUsuario/InputsMensagem";
import TelaTextos from "../../componentes/TelaTextos";
import LayoutGeral from "../../Layouts/LayoutGeral";
import styles from "./mensagem.module.scss";

export default function Mensagem(){
    return(
        <>
        <LayoutGeral>
            <Header/>
            <TelaTextos texto="Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:" />
            <section className={styles.Mensagem__sessao}>
                <form action="" className={styles.Mensagem__form}>
                    <InputsMensagem label="Nome" type="text" holder="Insira seu nome completo"/>
                    <InputsMensagem label="Telefone" type="number" holder="Insira seu telefone e/ou whatsapp"/>
                    <InputsMensagem label="Nome do animal" type="text" holder="Por qual animal você se interessou?"/>
                    <label className={styles.Mensagem__titulo}>Mensagem</label>
                    <textarea name="Mensagem" id="idMensagem" cols={30} rows={100} className={styles.Mensagem__texto}
                        placeholder="Escreva sua mensagem."></textarea>
                    {/* <InputsMensagem label="Mensagem" type="text" holder="Escreva sua mensagem."/> */}

                    <Botoes  name="Enviar"/>
                </form>
            </section>
        </LayoutGeral>
        <Footer/>
        </>
    )
}