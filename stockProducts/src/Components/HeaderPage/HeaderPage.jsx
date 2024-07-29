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
        <p > <a href="" target="_blank" rel="noopener noreferrer">Inicio</a></p>
          <p > <a href="" target="_blank" rel="noopener noreferrer"> Produtos</a></p>

        </div>
      </div>
    </div>


  )
}




