import style from "./MenuItensGeneralScreen.module.css"
import { Link } from "react-router-dom"

export default function MenuItensGeneralScreen() {


    return(
        
    <>
        <h1>STOCK ITENS</h1>
        <div className={style.MenuItensGeneralScreen} >

            <p > <Link to="/"  >Todos os Itens </Link></p>
            <p > <Link to="/"> Novo Item</Link></p>

        </div>
    </>


    )
}