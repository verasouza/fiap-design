import { GlobalStyles } from './assets/styles/globalStyle';
import { LoginForm } from './pages/Login';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Home} from './pages/Home';
import { NotFound } from './pages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
  {
    path: '*', // Rota para páginas não existentes
    element: <NotFound />,
  },

]);

function App() {

  return (
    <>
     <GlobalStyles />
     <RouterProvider router={router} />
    </>
  )
}

export default App
