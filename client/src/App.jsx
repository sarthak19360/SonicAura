import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './components/Cart'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: '/products/:pid',
      element: <SingleProduct />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ])
  return <RouterProvider router={router}/>
}

export default App