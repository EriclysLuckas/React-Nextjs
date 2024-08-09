import style from "./TableContent.module.css";
import Utils from '../../hooks/Utils';
import { FaEye } from "react-icons/fa";
import useBaseContext from "../../hooks/userBaseContext";

export default function TableContent() {
  const  {base} = useBaseContext();
  const lastItens = base.slice(-5)
  return (

    <div className={style.TableRec}>

      <table>

        <thead>
          <tr>
            <th scope="col">Itens Recentes</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>

          {lastItens.map((products) => (

            <tr key={products.id} >
              <td>{products.name}</td>
              <td><button className={style.btnProducts}><FaEye /></button></td>

            </tr>
          ))}


        </tbody>

      </table>

    </div>


  )

}




