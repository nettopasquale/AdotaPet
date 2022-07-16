import { TLayoutInicial } from "../../Types/TLayoutInicial";
import styles from "./LayoutGeral.module.scss";

export default function LayoutGeral(props: TLayoutInicial){
    return(
        <main className={styles.bg__geral}>{props.children}</main>
    )
}