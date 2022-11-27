import styled from "styled-components";
import deleteIcon from "../../Assets/delete-icon.svg";
import { useContext } from "react";
import UserContext from "../../contexts/contextApi.js";

export default function CardCart({ item, addToCart, removeFromCart, removeAllFromCart }) {

  const { name, price, description, image } = item.product;

  const { cart, setCart, cartItemsQnt, setCartItemsQnt } = useContext(UserContext);


  return (
    <Card>
      <div>
        <ContainImage>
          <img src={image} alt="" />
        </ContainImage>
        <ContainerDetails>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </ContainerDetails>
      </div>
      <div>
        <BtDelete onClick={() => removeAllFromCart({prod: item.product, cart, setCart, cartItemsQnt, setCartItemsQnt
            })}>
          <img src={deleteIcon} alt="" />
        </BtDelete>
        <ContainerQnt>
          <button
            onClick={() => removeFromCart({prod: item.product, cart, setCart, cartItemsQnt, setCartItemsQnt
            })}>
            <em>-</em>
          </button>
          <span>{item.qnt}</span>
          <button onClick={() => addToCart({prod: item.product, cart, setCart, cartItemsQnt, setCartItemsQnt
          })}>
            +
          </button>
        </ContainerQnt>
        <Price>R${price * item.qnt}</Price>
      </div>
    </Card>
  )
}

const Card = styled.div`
z-index: 0;
background-color: white;
width: 95%;
height: 150px;
border-top: 2px solid black;
padding: 1em;

  >div{
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto auto;
  }
`

const ContainImage = styled.div`
  margin-right: 2em;
  height: 100%;
  img{
    max-width: 33vw;
    max-height: max-content;
    width: 92px;
    height: 92px;
  }
`
const ContainerDetails = styled.div`
  height: 100%;
  width: 80%;

`
const Name = styled.div`
  width: 80%;
  height: 40%;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px; 
    font-weight: bold;

`

const Description = styled.div`
width: 80%;


    font-size: 16px;
    font-family: 'Anton', sans-serif;
    font-weight: lighter;
    margin-top: 10px;
    letter-spacing: 1px;
    line-height: 17px;

`

const BtDelete = styled.div`
  width: 22px;
  height: 22px;

  img{
    width: 22px;
    height: 22px;
  }
`

const ContainerQnt = styled.div`
  width: 30%;
  height: 39px;
  max-height: 15vh;
  border-radius: 1.25rem;
  background-color: lightgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: black;

  button{
    font-size: 22px;
    border: none;
    background-color: transparent;
  }

  span{
    font-size: 18px;
  }

`
const Price = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 23px;
  margin-left: 10px;
`