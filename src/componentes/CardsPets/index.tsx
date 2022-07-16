import mensagemIcone from "../../assets/svgs/ícone mensagem.svg";
import ICard from "../../Interfaces/ICard";
import styles from "./cardPets.module.scss";

const CardPets = (props: ICard) => {

    return (
        <div className={styles.card__pet}>
            <img src={props.imagemURL} alt=" imagem cachorro porte pequeno Dunga" className={styles.card__imagem}/>
            <div className={styles.card__descricao}>
                <p className={styles.card__titulo}>{props.nome}</p>
                <ul>
                    <li className={styles.card__texto}>{props.idade}</li>
                    <li className={styles.card__texto}>{props.porte}</li>
                    <li className={styles.card__texto}>{props.comportamento}</li>
                </ul>
                <p className="card__texto card__texto_cidade">{props.cidade}</p>
                <div className={styles.mensagem__container}>
                    <img src={mensagemIcone} alt="ícone mensagem" className={styles.card__mensagem} />
                    <p className={styles.mensagem__texto}>Falar com responsável</p>
                 </div>
            </div>
        </div>
    )
}

export default CardPets;