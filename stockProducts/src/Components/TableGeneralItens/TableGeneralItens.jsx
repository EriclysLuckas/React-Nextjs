import useBaseContext from "../../hooks/userBaseContext";
import { FaEye, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import style from "../TableGeneralItens/TableGeneralItens.module.css"



export default function TableGeneralItens() {

  const { base, deleteProducts } = useBaseContext()



  const deleting = (id)=>{
    deleteProducts(id)
  }
  return (
    <table className={style.TableGeneralItens}>

      <thead>
        <tr className={style.TableGeneralItensTRhead}>
          <th scope="col">ID  </th>
          <th scope="col" className={style.name}> Nome</th>
          <th scope="col">  Em estoque</th>
          <th scope="col"> Categoria</th>
          <th scope="col"> Ações </th>

        </tr>
      </thead>
      <tbody>

        {base.map((products) => (

          <tr key={products.id} >
            <td>{products.id}</td>
            <td >{products.name}</td>
            <td>{products.quantity}</td>
            <td> {products.category}</td>
            <td className={style.tdBtnAll}>
              <button className={style.btnProducts}><FaEye /></button>
              <button className={`${style.btnProducts} ${style.edit}`}><FaPencilAlt /></button>
              <button className={`${style.btnProducts} ${style.trash}`} onClick = {() =>deleting(products.id)}><FaTrashAlt /></button>
            </td>
          </tr>
        ))}


      </tbody>

    </table>
  )
}