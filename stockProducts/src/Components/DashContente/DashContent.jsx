import style from "./DashContent.module.css";
import Utils from '../../hooks/Utils';
import useBaseContext from "../../hooks/userBaseContext";

export default function DashContent() {
  const base = useBaseContext();
console.log(base)
  const filteredProducts = base.filter(product => product.quantity < 5);
  const filteredProductsTotal = filteredProducts.length;

  const totalUnd = base.reduce((count, product) => count + product.quantity, 0);
  const totalProducts = base.length;
  
  return (
    <div className={style.contentDash}>
      <h1>Dashboard</h1>
      <div className={style.dashboard}>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Variedade de Itens</h3>
          <p className={style.cardContentResult}>{totalProducts}</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Total de Itens</h3>
          <p className={style.cardContentResult}>{totalUnd}</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Recentes</h3>
          <p className={style.cardContentResult}>10</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Acabando</h3>
          <p className={style.cardContentResult}>{filteredProductsTotal}</p>
        </div>
      </div>
    </div>
  );
}

