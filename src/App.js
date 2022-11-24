import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "./GlobalStyle.js";
import { UserProvider } from "./contexts/contextApi.js";
import Products from "./pages/products/products.js";


export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
       <GlobalStyle/>
           <Routes>
           <Route path="/products" element = {<Products/>}/>
           </Routes>
   </BrowserRouter>
   </UserProvider>
  )
}

