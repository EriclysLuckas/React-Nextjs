import useBaseContext from "../../hooks/userBaseContext";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";

export const TemplateProduct = () => {

  const { id } = useParams()
  const { getProductId } = useBaseContext() //CHAMA A FUNÇÃO QUE RETORNA O PRODUTO PELO ID
  const [productsid, setProductsid] = useState({})
  useEffect(() => {
    const fethcProductsId = async () => {
      const productsview = await getProductId(id)
      setProductsid(productsview)
    }
    fethcProductsId()


  }, [id,getProductId])

  console.log(productsid)


  return (
    <>
    <p>{productsid.quantity}</p>
    </>
  )
}