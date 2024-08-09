import useBaseContext from "../../hooks/userBaseContext";



export default function TableGeneralItens() {

    const {base} = useBaseContext()

  return(
    <table>

    <thead>
      <tr>
        <th scope="col">Todos os Itens</th>
        <th scope="col">Ação</th>
      </tr>
    </thead>
    <tbody>

      {base.map((products) => (

        <tr key={products.id} >
          <td>{products.name}</td>
          <td><button >teste</button></td>

        </tr>
      ))}


    </tbody>

  </table>
  )
}