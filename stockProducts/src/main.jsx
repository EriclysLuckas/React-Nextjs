import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o método para criar uma raiz do React
import './index.css'; // Importa os estilos globais
import { RouterProvider } from 'react-router-dom'; // Importa o RouterProvider para gerenciar as rotas
import router from './routes'; // Importa a configuração de rotas

// Cria a raiz do React e renderiza o RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
