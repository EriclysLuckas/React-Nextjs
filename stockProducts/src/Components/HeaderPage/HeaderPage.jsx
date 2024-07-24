import style from "./HeaderPage.module.css";



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
          <p >Inicio</p>
          <p >Produtos</p>
          <p>Incluir</p>

        </div>
      </div>
    </div>


  )
}




