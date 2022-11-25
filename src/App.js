import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "./GlobalStyle.js";
import { UserProvider } from "./contexts/contextApi.js";
import Products from "./pages/products/products.js";
import Checkout from "./pages/checkout/Checkout.js";
import Payment from "./pages/payment/payment.js";

export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
       <GlobalStyle/>
           <Routes>
           <Route path="/products" element = {<Products/>}/>
           <Route path="/checkout" element = {<Checkout/>}/>
           <Route path="/payment" element = {<Payment/>}/>
           </Routes>
   </BrowserRouter>
   </UserProvider>
  )
}

