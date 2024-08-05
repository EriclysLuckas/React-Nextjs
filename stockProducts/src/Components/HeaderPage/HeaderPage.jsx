import style from "./HeaderPage.module.css";
import {Link} from 'react-router-dom'
export default function HeaderPage() {

  

  return (

    <div className={style.compHeader}>
      <div className={style.ContentHeader}>
        <div className={style.TitleHeader}>
          <h1>
            Stock
          </h1>
        </div>
        <div className={style.navHeader}>
        <p > <Link to="/home" >Inicio</Link></p>
          <p > <Link to="/produtos"> Produtos</Link></p>

        </div>
      </div>
    </div>


  )
}




