import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./pages/products.js";
import GlobalStyle from "./GlobalStyle.js";
import { UserProvider } from "./contexts/contextApi.js";


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

