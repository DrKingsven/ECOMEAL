import logo from "./logo.svg";
import "./App.css";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Profile";
import AppBarMenu from "./components/AppBarMenu/AppBarMenu";
import NavigateMenu from "./components/NavigateMenu";
import { Box } from "@mui/material";
import CardList from "./components/CardList";
import Profile from "./Page/Profile";
import ProductCard from "./components/ProductCard/ProductCard";
import Basket from "./components/Basket/Basket";

function App() {
  localStorage.setItem('basket', []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Box></Box>,
      errorElement: <Box>Ошибка</Box>
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/basket',
      element: <Basket/>
    },
    {
      path: '/products',
      element: <NavigateMenu />,
      children: [
        {
          path: '',
          element: <CardList />
        },
        {
          path: ':category',
          element: <CardList />
        }
      ]
    },
    {
      path: '/products/:productId/:id',
      element: <ProductCard />
    }
  ]);

  return (
    <>
      <AppBarMenu />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
