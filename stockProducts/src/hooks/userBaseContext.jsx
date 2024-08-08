// src/hooks/useBaseContext.js
import { useContext } from 'react';
import { BaseContext } from '../context/baseContext'; 

const useBaseContext = () => {
  const context = useContext(BaseContext);

  if (context === undefined) {
    throw new Error('Erro no useBaseContext');
  }

  return context;
};

export default useBaseContext;
