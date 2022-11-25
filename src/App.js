import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "./GlobalStyle.js";
import { UserProvider } from "./contexts/contextApi.js";
import Products from "./pages/products/products.js";
import Signup from "./pages/Signup.js";
import Signin from "./pages/Signin.js";


export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
       <GlobalStyle/>
           <Routes>
           <Route path="/products" element = {<Products/>}/>
           <Route path="/" element = {<Signin/>}/>
           <Route path="/signup" element = {<Signup/>}/>
           <Route path="/signin" element = {<Signin/>}/>
           </Routes>
   </BrowserRouter>
   </UserProvider>
  )
}

