import style from "./AddItemForm.module.css"



 export default function AddItemForm (){
  
  
  
  
  return(
    <section className={style.formcarryContainer}>
    <form action="#" method="POST" >
      
      <div className={style.formCarryBlock}>
        <label >Nome</label>
        <input type="text" name="name" id="nameForm"  />
      </div>
      
      <div className={style.formCarryBlock}>
        <label >Quantidade</label>
        <input type="number" name="quantity" id="quantityForm"  />
      </div>
      
      <div className={style.formCarryBlock}>
        <label >Preço</label>
        <input type="Number" name="preco" id="precoForm" />
      </div>
      
      <div className={style.formCarryBlock}>
        <label >Categoria do Produto</label>
        <select name="people" id="">
          <option value="" selected disabled>Selecione a Categoria</option>
          <option value="Categoria1">Categoria 1</option>
          <option value="Categoria2">Categoria 2</option>
          <option value="Categoria3">Categoria 3</option>
          <option value="Categoria4">Categoria 4</option>
        </select>
      </div>
      
      <div className={style.formCarryBlock}>
        <label >Descrição</label>
        <textarea name="message"  id="descricao" ></textarea>
      </div>
      
      <div className={style.formCarryBlock}>  
        <button type="submit">Salvar</button>
      </div>
    
    </form>
  </section>
  )
}