import IInput from "../../../Interfaces/IInputsUsuarios";
import styles from "./inputPerfil.module.scss";

export default function InputsPerfil(props: IInput){
    return(
        <>
            <label htmlFor={props.label} className={styles.perfil__titulo}>{props.label}</label>
            <input type={props.type} placeholder={props.holder} className={styles.perfil__input}/>
        </>
    )
}