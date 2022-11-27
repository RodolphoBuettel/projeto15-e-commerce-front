import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../contexts/contextApi"


export default function Payment() {

    const {numberCard, setNumberCard, nameCard, setNameCard, validity, setValidity, 
        securityCode, setSecurityCode} = useContext(UserContext);

    function finishOrder(){
        alert("Seu pedido foi finalizado com sucesso.");
    }

    return (
        <PaymentForm onSubmit={(e) => e.preventDefault()}>
            <label>Numero do cartão</label>
            <input
                id="cartao"
                type="text"
                value={numberCard}
                onChange={(e) => setNumberCard(e.target.value)}
                placeholder=" "
                required />
            <label>Nome do titular do cartão</label>
            <input
                id="NomeDoCartao"
                type="text"
                value={nameCard}
                onChange={(e) => setNameCard(e.target.value)}
                placeholder=" "
                required />
            <label>Validade</label>
            <input
                id="validade"
                type="text"
                value={validity}
                onChange={(e) => setValidity(e.target.value)}
                placeholder=" MM/YY"
                required />
            <label>Código de segurança</label>
            <input
                id="digitos"
                type="text"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                placeholder=" Atrás do cartão, 3 digítos "
                required />
            
            <button onClick={() => finishOrder()}>Confirmar informações</button>
        </PaymentForm>
    )
}

const PaymentForm = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
input{
    height: 46.19px;
width: 100%;
border-radius: 5px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
margin-bottom: 30px;
}
button{
    margin-top: 50px;
    width: 100%;
height: 70px;
left: 36px;
top: 381px;
border: none;
background: black;
border-radius: 4.63636px;
color:white;
}
label{
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}
`