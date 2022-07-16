import CardPets from "../../componentes/CardsPets";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import TelaTextos from "../../componentes/TelaTextos";
import LayoutGeral from "../../Layouts/LayoutGeral";
import styles from "./homeUser.module.scss";
import dungaImg from "../../assets/imgs/Dunga.png"
import feliciaImg from "../../assets/imgs/Felícia.png"
import siriusImg from "../../assets/imgs/Imagem - sirius.png"
import fionaImg from "../../assets/imgs/Imagem-Fiona.png"
import sidImg from "../../assets/imgs/Imagem - Sid.png"
import yodaImg from "../../assets/imgs/Yoda.png"
import luaImg from "../../assets/imgs/Imagenm - Lua.png"
import amoraImg from "../../assets/imgs/Imagenm Amora.png"
import zeldaImg from "../../assets/imgs/Imagem Zelda.png"


export default function HomeUser(){
 
    return (
        <>
        <LayoutGeral>
            <Header />
            <TelaTextos texto="Olá!
            Veja os amigos disponíveis para adoção!"/>
                <section className={styles.Cards__container}>
                    {/* Dunga card */}
                    <CardPets imagemURL={dungaImg} nome="Dunga" idade="2 anos" 
                    porte="Porte pequeno" comportamento="Calmo e educado" cidade="Rio de Janeiro (RJ)"/>
                    {/* Felicia card */}
                    <CardPets imagemURL={feliciaImg} nome="Felicia" idade="3 meses" 
                    porte="Porte pequeno" comportamento="Ativa e carinhosa" cidade="Nova Iguaçu (RJ)"/>
                    {/* Sirius card */}
                    <CardPets imagemURL={siriusImg} nome="Sirius" idade="6 meses" 
                    porte="Porte grande" comportamento="Ativo e educado" cidade="Duque de Caxias (RJ)"/>
                    {/* Fiona card */}
                    <CardPets imagemURL={fionaImg} nome="Fiona" idade="3 anos" 
                    porte="Porte pequeno" comportamento="Calma e carinhosa" cidade="São Gonçalo (RJ)"/>
                    {/* Sid card */}
                    <CardPets imagemURL={sidImg} nome="Sid" idade="8 meses" 
                    porte="Porte médio/grande" comportamento="Brincalhão e amável" cidade="Rio de Janeiro (RJ)"/>
                    {/* Yoda card */}
                    <CardPets imagemURL={yodaImg} nome="Yoda" idade="1 ano" 
                    porte="Porte médio" comportamento="Ativo e carinhoso" cidade="Nova Iguaçu (RJ)"/>
                    {/* Lua card */}
                    <CardPets imagemURL={luaImg} nome="Lua" idade="6 meses" 
                    porte="Porte médio" comportamento="Calmo e educado" cidade="Duque de Caxias (RJ)"/>
                    {/* Amora card */}
                    <CardPets imagemURL={amoraImg} nome="Amora" idade="45 dias" 
                    porte="Porte grande" comportamento="Calma e carinhosa" cidade="São Gonçalo (RJ)"/>
                    {/* Zelda card */}
                    <CardPets imagemURL={zeldaImg} nome="Zelda" idade="5 meses" 
                    porte="Porte médio" comportamento="Ativa e amável" cidade="Rio de Janeiro (RJ)"/>
                </section>
        </LayoutGeral>
        <Footer/>
        </>
    )
} 
