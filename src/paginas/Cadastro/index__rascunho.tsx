
import Botoes from '../../componentes/Botoes'
import Footer from '../../componentes/Footer'
import Header from '../../componentes/Header'
import TelaTextos from '../../componentes/TelaTextos'
import styles from './cadastro.module.scss'

export default function Cadastrox(){
    return(
        <>
        <Header/>
        <TelaTextos texto='#'/>
        <section className={styles.cadastro}>
            <form action="" className={styles.cadastro__usuario}>
                <label htmlFor="Email" className={styles.cadastro__titulos}>Email</label>
                <input type="email" placeholder='Escolha seu melhor email' className={styles.input__botoes} />

                <label htmlFor="Nome" className={styles.cadastro__titulos}>Nome</label>
                <input type="text" placeholder='Digite seu nome completo' className={styles.input__botoes} />

                <label htmlFor="Senha" className={styles.cadastro__titulos}>Senha</label>
                <input type="password" placeholder='Crie uma senha' className={styles.input__botoes} id={styles.input__senha}/>

                <label htmlFor="Confirma sua senha" className={styles.cadastro__titulos}>Confirma sua senha</label>
                <input type="password" placeholder='Repita a senha criada acima' className={styles.input__botoes} id={styles.input__senha} />
            </form>
            <Botoes name='Cadastrar'/>
        </section>
        <Footer/>
        </>
    )
}

