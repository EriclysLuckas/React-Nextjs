import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/LayoutRoot';
import {Home} from './pages/Home/Home';
import ScreenItensGeneral from './pages/ScreenItensGeneral/ScreenItensGeneral';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },

      {
        path: "produtos",
        element: <ScreenItensGeneral />,
        // children: [
        //   { index: true, element: <NewItem /> }, // Página padrão para /produtos
        //   { path: "new", element: <NewItem /> },
        //   { path: "id", element: <ItemID /> },
        //   { path: ":id/update", element: <UpdateItem /> },
        // ],
      }
    ],
  },
]);

export default router;
