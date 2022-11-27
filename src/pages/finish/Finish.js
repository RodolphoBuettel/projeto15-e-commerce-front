import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../contexts/contextApi"


export default function Finish() {

    const {email, name, address, city, country} = useContext(UserContext);

    return (
            <FinishOrder>
                <Infomations>
                    <h1>Confira suas informações:</h1>
                    <div>{email}</div>
                    <div>{name}</div>
                    <div>{country} {city} {address}</div>
                    <div>Pagamento</div>
                </Infomations>
                <button>Finalizar Pedido</button>
            </FinishOrder>
    )
}

const FinishOrder = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f3f3f7;
button{
    width: 100%;
height: 70px;
left: 36px;
top: 381px;
border: none;
background: black;
border-radius: 4.63636px;
color:white;
margin-top: 20px;
}
`
const Infomations = styled.div`
width: 100%;
background-color: white;
div{
    color: black;
    font-size: 45px;
}
h1{
    color: black;
    font-size: 50px;
}
`