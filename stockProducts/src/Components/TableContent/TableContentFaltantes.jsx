// eslint-disable-next-line no-unused-vars
import style from "./TableContent.module.css";
import Utils from '../../hooks/Utils';
import { FaEye } from "react-icons/fa";
import useBaseContext from "../../hooks/userBaseContext";



export default function TableContentF() {
  const  {base} = useBaseContext();

  const filteredProducts = base.filter(product => product.quantity < 5);

  return (
    <div className={style.TableFaltantes}>
      <table>

        <thead>
          <tr>
            <th scope="col">Itens Acabando</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>

          {filteredProducts.map((products) => (
            <tr key={products.id} className={style.trTableF}>
              <td>{products.name}</td>
              <td>{products.quantity}</td>
              <td><button className={style.btnProducts}><FaEye /></button></td>
            </tr>
          ))}


        </tbody>

      </table>
    </div>

  )
}




