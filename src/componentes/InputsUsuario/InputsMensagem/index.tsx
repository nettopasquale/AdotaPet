import IInput from "../../../Interfaces/IInputsUsuarios";
import styles from "../../../paginas/Mensagem/mensagem.module.scss";

export default function InputsMensagem(props: IInput){
    return(
        <>
            <label htmlFor={props.label} className={styles.Mensagem__titulo}>{props.label}</label>
            <input type={props.type} placeholder={props.holder} className={styles.Mensagem__input}/>
        </>
    )

}