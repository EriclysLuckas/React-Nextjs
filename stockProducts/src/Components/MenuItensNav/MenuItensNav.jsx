import style from "./MenuItensNav.module.css"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"
export default function MenuItensGeneralScreen() {

const navigate = useNavigate()


    return (

        <>
            <h1>STOCK ITENS</h1>
            <div className={style.MenuItensGeneralScreen} >

                <p > <Link to="/produtos/all" className={style.linkGeneral}>Todos os Itens </Link></p>
                <p > <Link to="/produtos/newitem" className={style.linkGeneral}> Novo Item</Link></p>

            </div>
        </>


    )
}