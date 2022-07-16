import styles from "./telaTextos.module.scss";
import ITelaTextos from "../../Interfaces/ITelaTextos";

export default function TelaTextos(props: ITelaTextos){
    return(
        <div className={styles.inicial__descricao}>
            <h2 className={styles.tela__titulo}>{props.titulo}</h2>
            <p className={styles.tela__texto}>{props.texto}</p>
        </div>
    )
}