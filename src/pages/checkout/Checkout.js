import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../../contexts/contextApi"



export default function Checkout() {

   const {email, setEmail, name, setName, lastName, setLastName, country, setCountry,
    city, setCity, address, setAddress} = useContext(UserContext);

    return (
        <Container>
            <ContactInfomation>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" Email"
                    required />
                <input
                    id="name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" Nome"
                    required />
                <input
                    id="lastName"
                    type="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder=" Sobrenome"
                    required />
                <input
                    id="country"
                    type="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder=" País"
                    required />
                <input
                    id="city"
                    type="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder=" Cidade"
                    required />
                <input
                    id="address"
                    type="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder=" Endereço"
                    required />
                <button type="submit">Continue para o pagamento</button>
            </ContactInfomation>
        </Container>
    )
}

const Container = styled.div`

`
const ContactInfomation = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 200px;
width: 100%;
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
margin-bottom: 10px;
}
button{
    width: 100%;
height: 70px;
left: 36px;
top: 381px;
border: none;
background: black;
border-radius: 4.63636px;
color:white;
}
`