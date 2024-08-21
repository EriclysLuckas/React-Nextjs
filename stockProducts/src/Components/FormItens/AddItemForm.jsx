import style from "./AddItemForm.module.css"
import useBaseContext from "../../hooks/userBaseContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


export default function AddItemForm() {
  const navigate = useNavigate(); // Inicializa useNavigate

  const { addProduct } = useBaseContext()
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    desc: "",
  })
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,

    }))
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name) {
      console.error("Nome é obrigatório");
    }    
    const newProduct = {
      name: formData.name,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      category: formData.category,
      desc: formData.desc,
      // date: formattedDate,
    }
    await addProduct(newProduct);
    setFormData({
      name: "",
      quantity: "",
      price: "",
      category: "",
      message: "",
    });
    navigate("/produtos/all");

  };






  return (
    <section className={style.formcarryContainer}>
      <form onSubmit={onSubmit}>
        <div className={style.formCarryBlock1}>
          <div className={style.boxinput}>
            <label htmlFor="nameForm">Nome</label>
            <input
              type="text"
              name="name"
              id="nameForm"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="quantityForm">Quantidade</label>
            <input
              type="number"
              name="quantity"
              id="quantityForm"
              value={formData.quantity}
              onChange={onChange}
              required
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="precoForm">Preço</label>
            <input
              onChange={onChange}
              type="number"
              name="price"
              id="priceForm"
              value={formData.price}
              required
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="categorySelect">Categoria do Produto</label>
            <select
              onChange={onChange}
              name="category"
              id="categoryForm"
              value={formData.category}
              required
            >
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
          <textarea
            onChange={onChange}
            name="desc"
            id="descForm"
            value={formData.desc}
            required
          ></textarea>
        </div>
        <div className={style.formCarryBlock}>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </section>
  )
}