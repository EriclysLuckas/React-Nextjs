import style from "./TableContent.module.css";
import Utils from '../../Utils/Utils';
import { FaEye } from "react-icons/fa";

export default function TableContent() {
  const base = Utils()
  return (

    <div className= {style.TableRec}>
   
        <table>

          <thead>
            <tr>
              <th scope="col">Itens Recentes</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>

            {base.map((products) => (

              <tr key={products.id} >
                <td>{products.name}</td>
                <td><button className={style.btnProducts}><FaEye /></button></td>
              
              </tr>
            )) }


          </tbody>

        </table>
  
        </div>


  )

}




