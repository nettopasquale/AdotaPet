import styles from '../../paginas/Cadastro/cadastro.module.scss'
import stylesInput from "./inputs.module.scss";
import IInputsUsuarios from "../../Interfaces/IInputsUsuarios";


export default function Inputs(props: IInputsUsuarios){
    return(
        <>
            <label htmlFor={props.label} className={styles.cadastro__titulos}>{props.label}</label>
            <input type={props.type} placeholder={props.holder} className={stylesInput.input__botoes}/>
        </>
    )
}