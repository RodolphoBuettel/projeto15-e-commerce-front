import { useEffect, useState } from "react";
import styled from "styled-components"
import Product from "./product.js";
import axios from "axios";

export default function Products() {

    const [funkos, setFunkos] = useState([]);


    useEffect(() => {
        const URL = "http://localhost:5000/products";
        const promise = axios.get(URL);

        promise.then((res) => {
            setFunkos(res.data);
        })

        promise.catch((err) => {
            console.log(err.response.data);
        })
    }, []);

    return (
        <Container>
            <Header>
                <Name>
                    <h1>BonecosCabeçudos</h1>
                </Name>
                <Actions>
                    <div><ion-icon name="search-sharp"></ion-icon></div>
                    <div><ion-icon name="bag-sharp"></ion-icon></div>
                    <div><ion-icon name="menu-sharp"></ion-icon></div>
                </Actions>
            </Header>
            <ItemsContainer>
                <Items>
                    {funkos.map((n, index) => <Product n={n} key={index} />)}
                </Items>
            </ItemsContainer>
            <Footer>
                <h2>Em construção</h2>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f3f3f7;
    height: 100%;
    width: 100%;
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
    h2{
        color: white;
    }
`