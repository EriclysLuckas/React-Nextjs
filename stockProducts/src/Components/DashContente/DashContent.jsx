import style from "./DashContent.module.css";
import {  useState } from "react";


export default function DashContent() {


  const [totalItem,setTotalItem] = useState()



  return (
    <div className={style.contentDash}>
      <h1>Dashboard</h1>
      <div className={style.dashboard}>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Variedade de Itens</h3>
          <p className={style.cardContentResult}>10</p></div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Total de Itens</h3>
          <p className={style.cardContentResult}>10</p></div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Recentes</h3>
          <p className={style.cardContentResult}>10</p></div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Acabando</h3>
          <p className={style.cardContentResult}>10</p></div>
      </div>
    </div>



  )
}




