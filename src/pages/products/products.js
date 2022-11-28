import { useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar.js";
import Product from "./product.js";
import { useContext } from "react";
import UserContext from "../../contexts/contextApi.js";
import { getCart} from "../cart/Cart.js";


export default function Products() {

    const [funkos, setFunkos] = useState([]);
    const [display, setDisplay] = useState("none");
    const [position, setPosition] = useState("");

    const { cart, setCart, cartItemsQnt, setCartItemsQnt, refresh, setRefresh } = useContext(UserContext);

    const navigate = useNavigate();

    function OpenMenu() {
        setDisplay("");
        setPosition("fixed");
    }

    useEffect(() => {
        const URL = "http://localhost:5000/products";
        const promise = axios.get(URL);

        promise.then((res) => {
            setFunkos(res.data);
            getCart({cart, setCart, cartItemsQnt, setCartItemsQnt});
        })

        promise.catch((err) => {
            console.log(err.response.data);
        })


    }, []);


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
                <ItemsContainer>
                    <Items>
                        {funkos.map((n, index) => <Product n={n} key={index} />)}
                    </Items>
                </ItemsContainer>
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

const Container = styled.div`
    background-color: #f3f3f7;
    height: 100%;
    width: 100%;
    overflow: hidden;
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
const Items = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const ItemsContainer = styled.div`
display: flex;
    padding-top: 100px;
`
const Footer = styled.div`
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