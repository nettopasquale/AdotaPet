import styles from './footer.module.scss';

export default function Footer(){
    return(
        <footer className={styles.footer__container}>
            <p className={styles.footer__texto}>2022 - Desenvolvido por Pasquale Milone Netto.</p>
        </footer>
    )
}