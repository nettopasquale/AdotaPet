import styles from "./Layout-Inicial..module.scss";
import React from 'react';
import { TLayoutInicial } from "../../Types/TLayoutInicial";

// type LayoutProps ={
//     children: React.ReactNode; // 👈️ type children
// }

export default function LayoutInicial(props: TLayoutInicial){
    return(
        <main className={styles.bg__inicial}>{props.children}</main>
    )
}