import style from "./MenuItensGeneralScreen.module.css"
import { Link } from "react-router-dom"

export default function MenuItensGeneralScreen() {


    return (

        <>
            <h1>STOCK ITENS</h1>
            <div className={style.MenuItensGeneralScreen} >

                <p > <Link to="/" className={style.linkGeneral}>Todos os Itens </Link></p>
                <p > <Link to="/" className={style.linkGeneral}> Novo Item</Link></p>

            </div>
        </>


    )
}