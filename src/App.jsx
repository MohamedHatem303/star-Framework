import './App.css'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Contact from './Page/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Not_found from './Page/Not_found/Not_found'
import Portfolio from './Page/Portfolio/Portfolio'

let route = createBrowserRouter([
  {path:'',element:<Layout/>,children:([
    {path:'',element:<Home/>} ,
    {path:'About',element:<About/>} ,
    {path:'Portfolio',element:<Portfolio/>} ,
    {path:'Contact',element:<Contact/>},
    {path:'*',element:<Not_found/>}
  ])}
])

function App() {
  return (
    <>
       <RouterProvider router={route} />
    </>
  )
}

export default App
