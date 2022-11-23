import styled from "styled-components";
import FunkoExemple from "../Assets/funkoIchigo.jpg";

export default function Product({ n }) {
    return (
        <Funko>
            <ContainImage><img src={FunkoExemple} alt="funko" /></ContainImage>
            <Name><h2>Ichigo</h2></Name>
            <Description><h2>SUBSTITUTO DE SHINIGAME</h2></Description>
            <Price><h2>R$50,00</h2></Price>
            <AddProduct>
                <h2>Adicionar no carrinho</h2>
            </AddProduct>
        </Funko>
    )
}

const Funko = styled.div`
z-index: 0;
background-color: white;
position: relative;
    width: 275.97px;
    margin-right:20px;
    margin-bottom: 20px;
    height: 466.5px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`
const AddProduct = styled.div`
position: absolute;
    width: 251.7px;
    height: 40px;
    background-color:black ;
    border-radius: 10px;
    bottom: 10px;
    left:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        color: white;
    }
`
const ContainImage = styled.div`
  margin-left:20px;
  margin-top: 20px;
    img{
        max-width:275.97px;
    max-height:275.97px;
    width: auto;
    height: auto;
    }
`
const Name = styled.div`
width: 260px;
height: 18px;
h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 25px;
    margin-left: 10px;
   
}
`

const Description = styled.div`
width: 260px;
height: 32px;
h2{
    font-size: 18px;
    font-family: 'Anton', sans-serif;
    font-weight: lighter;
    margin-top: 20px;
    margin-left: 10px;
    letter-spacing: 1px;
}
`
const Price = styled.div`
    width: 260px;
height: 18px;
    h2{
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 23px;
        margin-left: 10px;
    }
`