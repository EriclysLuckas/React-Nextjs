import style from "./AddItemForm.module.css"


export default function AddItemForm() {



  return (
    <section className={style.formcarryContainer}>
      <form action="#" method="POST">
        <div className={style.formCarryBlock1}>
          <div className={style.boxinput}>
            <label htmlFor="nameForm">Nome</label>
            <input type="text" name="name" id="nameForm" required />
          </div>
          <div className={style.boxinput}>

            <label htmlFor="quantityForm">Quantidade</label>
            <input type="number" name="quantity" id="quantityForm" />
          </div>

          <div className={style.boxinput}>

            <label htmlFor="precoForm">Preço</label>
            <input type="number" name="price" id="precoForm" />
          </div>


          <div className={style.boxinput}>

            <label htmlFor="categorySelect">Categoria do Produto</label>
            <select name="category" id="categorySelect" >
              <option value="" >Selecione a Categoria</option>
              <option value="Categoria1">Categoria 1</option>
              <option value="Categoria2">Categoria 2</option>
              <option value="Categoria3">Categoria 3</option>
              <option value="Categoria4">Categoria 4</option>
            </select>
          </div>
        </div>

        <div className={style.formCarryBlock2}>
          <label htmlFor="descricao">Descrição</label>
          <textarea name="message" id="descricao"></textarea>
        </div>

        <div className={style.formCarryBlock}>
          <button type="submit">Salvar</button>
        </div>
      </form>

    </section>
  )
}