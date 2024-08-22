import btnStyle from "../ButtonAction/ButtonAction.module.css";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import useBaseContext from "../../hooks/userBaseContext";
//eslint-disable-next-line
export const ButtonAction = ({ type, productId }) => {
  const { deleteProducts } = useBaseContext();

  const handleAction = () => {
    
    if (type === 'delete') {
      deleteProducts(productId);
    } else if (type === 'update') {

      console.log('teste')

    }
  
  };

  return (
    <button className={`${btnStyle.btnProducts} ${type === 'delete' ? btnStyle.trash : btnStyle.edit}`} onClick={handleAction}>
      {type === 'delete' ? <FaTrashAlt /> : <FaPencilAlt />}
    </button>
  );
};
