import IBotoes from "../../Interfaces/IBotoes";
import styles from "./botoes.module.scss";

export default function Botoes(props: IBotoes){
    return(
        <div className={styles.botao__container}>
            <button className={styles.botao__cadastro}>
            {props.name}
            </button>
        </div>
    )
}