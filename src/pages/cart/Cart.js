import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../products/SideBar.js";
import { useContext } from "react";
import UserContext from "../../contexts/contextApi.js";
import CardCart from "./cardCart.js";
import { createCart, findCart } from "../../services/cart.js";

export function Cart() {

    const [display, setDisplay] = useState("none");
    const [position, setPosition] = useState("");

    const { cart, setCart, cartItemsQnt, setCartItemsQnt } = useContext(UserContext);

    const navigate = useNavigate();

    function OpenMenu() {
        setDisplay("");
        setPosition("fixed");
    }

    function saveCart(){
        const token = JSON.parse(localStorage.getItem("token"));
        if(!token){
            return navigate("/signin");

        }
        if(!!cart){
            createCart(cart, token).then((res) => {
                navigate("/checkout");
              }).catch(
                alert("Erro ao salvar carrinho")
              )
        }
           
    }

    return (
        <TravaFundo position={position}>
            <Container>
                <Header>
                    <Name onClick={() => navigate("/")}>
                        <h1>BonecosCabeçudos</h1>
                    </Name>
                    <Actions>
                        <div><ion-icon name="search-sharp"></ion-icon></div>
                        <div onClick={() => navigate("/cart")}>
                            <div>{cartItemsQnt > 0 ? cartItemsQnt : ""}</div>
                            <ion-icon name="bag-sharp"></ion-icon>
                        </div>
                        <div onClick={OpenMenu}><ion-icon name="menu-sharp"></ion-icon></div>
                    </Actions>
                </Header>
                <CartContainer>
                    <div className="header">
                        <h2>Meu carrinho</h2>
                    </div>

                    {cart.length > 0 ?

                        <div className="cart-details">
                            <div>
                                <span>RESUMO</span>
                                <span>{cartItemsQnt} ITENS</span>
                            </div>
                            <div>
                                <span>SUBTOTAL</span>
                                <span className="price">R$
                                    {(cart.reduce((sum, item) => {
                                        return (sum + (Number(item.product.price) * Number(item.qnt)))
                                    }, 0)).toFixed(2)
                                    }
                                </span>
                            </div>
                            <div className="bt-checkout">
                                <button onClick={() => saveCart()}>CHECKOUT</button>
                            </div>
                        </div>

                        : null}

                    <Items>
                        <div className="header">
                            <span>ITEM</span>
                            <span>QUANTIDADE</span>
                            <span>PREÇO</span>
                        </div>

                        {cart.length > 0 ?

                            cart.map((item, index) =>
                                <CardCart
                                    key={index}
                                    item={item}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                    removeAllFromCart={removeAllFromCart}
                                />
                            )

                            : <div className="empty-cart-message">Carrinho vazio :(</div>}
                    </Items>
                </CartContainer>
                <Footer>
                    <h2>BonecosCabeçudos</h2>
                    <Contacts>
                        <div><ion-icon name="logo-facebook"></ion-icon></div>
                        <div><ion-icon name="logo-instagram"></ion-icon></div>
                        <div><ion-icon name="logo-whatsapp"></ion-icon></div>
                    </Contacts>
                </Footer>
                <SideBar display={display} setPosition={setPosition} setDisplay={setDisplay} />
                <MudaBack display={display}></MudaBack>
            </Container>
        </TravaFundo>
    )
}

export function addToCart({ prod, cart, setCart, cartItemsQnt, setCartItemsQnt }) {


    console.log("Adicionei o produto: " + prod._id);
    let newCart = [];

    const isInCart = cart.some((item) => item.product._id === prod._id);

    if (!isInCart) {
        newCart = [...cart, { product: prod, qnt: 1 }];
    } else {
        newCart = cart.map((item) => item.product._id === prod._id ? { ...item, qnt: item.qnt + 1 } : item);
    }

    setCart(newCart);
    setCartItemsQnt(cartItemsQnt + 1);
    localStorage.setItem('bc-cart', JSON.stringify(newCart));

}

export function removeFromCart({ prod, cart, setCart, cartItemsQnt, setCartItemsQnt }) {

    let newCart = [];

    const [{ product, qnt }] = cart.filter((item) => item.product._id === prod._id);


    if (qnt > 1) {
        newCart = cart.map((item) => item.product._id === product._id ? { ...item, qnt: item.qnt - 1 } : item);
    } else {
        newCart = cart.filter((item) => item.product._id !== product._id);
    }

    setCart(newCart);
    setCartItemsQnt(cartItemsQnt - 1);
    localStorage.setItem('bc-cart', JSON.stringify(newCart));
}

export function removeAllFromCart({ prod, cart, setCart, cartItemsQnt, setCartItemsQnt }) {

    let newCart = [];

    const [{ product, qnt }] = cart.filter((item) => item.product._id === prod._id);

    newCart = cart.filter((item) => item.product._id !== product._id);

    setCart(newCart);
    setCartItemsQnt(cartItemsQnt - qnt);
    localStorage.setItem('bc-cart', JSON.stringify(newCart));
}

const Container = styled.div`
    background-color: #f3f3f7;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-bottom: 100px;
    box-sizing: border-box;
`
const Header = styled.div`
    width: 100%;
    background-color: black;
    height: 70px;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    box-sizing: border-box;
    z-index: 1;
`
const Name = styled.div`
margin-left: 10px;
    h1{
        font-family: 'Pacifico', cursive;
        font-size: 25px;
        color: white;
    }
`
const Actions = styled.div`
width: 150px;
display: flex;
justify-content: space-around;
   div{
    font-size: 25px;
color:white;
   } 
`

const CartContainer = styled.div`
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    .header{
        width: 100%;
        text-align: center;
        margin-bottom: 20px;

        h2{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 25px;
            font-weight: bold;
        }
    }

    .cart-details{
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
        background-color: lightgray;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            margin: auto auto;
            height: 28%;
            

            span{
                font-size: 20px;
            }

            span.price{
                font-weight: bold;
            }
        }

        .bt-checkout{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            margin-bottom: 10px;

            button{
                width: 40%;
                height: 100%;
                border-radius: 1.25rem;
                background-color: black;
                color: white;
            }
        }
    }

`
const CartDetails = styled.div`
    margin-top: 10px;
    width: 100%;
`

const Items = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;

    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 100%;
        height: 20px;

        span{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 18px;
            font-weight: bold;
        }
    }

    .empty-cart-message{
        height: 100%;
    }
`
const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        font-family: 'Pacifico', cursive;
        font-size: 25px;
        color: white;
        margin-left: 10px;
    }
`
const Contacts = styled.div`
width: 250px;
display: flex;
justify-content: space-around;
div{
    font-size: 35px;
color:white;
   } 
`
const TravaFundo = styled.div`
    position: ${prop => prop.position};
    top: 0;
    z-index: 5;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(27,27,27,.3);

`
const MudaBack = styled.div`
display: ${props => props.display};
    position:fixed;
    top: 0;
    z-index: 5;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(27,27,27,.3);
`