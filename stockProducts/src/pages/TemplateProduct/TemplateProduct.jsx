import useBaseContext from "../../hooks/userBaseContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styleProductView from "../TemplateProduct/TemplateProduct.module.css";
import { ButtonAction } from '../../Components/ButtonAction/ButtonAction';
export const TemplateProduct = () => {

  const { id } = useParams()                                  //UTILIZA O ID COMO PARAMS
  const { getProductId } = useBaseContext()                   //CHAMA A FUNÇÃO QUE RETORNA O PRODUTO PELO ID
  const [productsid, setProductsid] = useState({})            // CRIEI UM STATE PARA ARMAZENAR O PRODUTO

  useEffect(() => {
    const fethcProductsId = async () => {
      const productsview = await getProductId(id) // inicio uma const que aguarda o retorno do ID
      setProductsid(productsview) //armazeno os produtos por id no state
    }
    fethcProductsId() //executo minha função

  }, [id, getProductId])


  return (
    <div className={styleProductView.contentProductView}>
      <div className={styleProductView.headerProductView}>
        <div className={styleProductView.NameProductView}>
          <span > {productsid.name} </span>

        </div>
        {productsid && productsid.id ? (
          <div className={styleProductView.actionHeaderProductView}>
            <ButtonAction type="update" productId={productsid.id} />
            <ButtonAction type="delete" productId={productsid.id} />
          </div>
        ) : (
          null
        )}







      </div>

      <div className={styleProductView.bodyProductView}>
        <div className={styleProductView.contentCardsProductView}>
          <div className={styleProductView.cardsProductView}>Categoria: {productsid.category}</div>
          <div className={styleProductView.cardsProductView}>Quantidade em estoque: {productsid.quantity}</div>
          <div className={styleProductView.cardsProductView}>Preço: R${productsid.price}      </div>


        </div>
        <div className={styleProductView.descProductView}>
          <span>Descrição</span> <span>{productsid.desc}</span>
        </div>

      </div>

    </div>
  )
}