import useBaseContext from "../../hooks/userBaseContext";
import { FaEye,FaTrashAlt, FaPencilAlt   } from "react-icons/fa";
import style from "../TableGeneralItens/TableGeneralItens.module.css"



export default function TableGeneralItens() {

    const {base} = useBaseContext()

  return(
    <table className = {style.TableGeneralItens}>

    <thead>
      <tr className = {style.TableGeneralItensTRhead}>
        <th scope="col">ID  </th>
        <th scope="col"> Nome</th>
        <th scope="col">  Em estoque</th>
        <th scope="col"> Categoria</th>
        <th scope="col"> Ações </th>

      </tr>
    </thead>
    <tbody>

      {base.map((products) => (

        <tr key={products.id} >
          <td>{products.id}</td>
          <td>{products.name}</td>
          <td>{products.quantity}</td>
          <td> {products.category}</td>
          <div className = {style.btnAction}>
          <td><button className={style.btnProducts}><FaEye /></button></td>
          <td><button className={`${style.btnProducts} ${style.edit}`}><FaPencilAlt /></button></td>
          <td><button className={`${style.btnProducts} ${style.trash}` }><FaTrashAlt/></button></td>
          </div>
        </tr>
      ))}


    </tbody>

  </table>
  )
}