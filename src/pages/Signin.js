import { Button, Input, SignContainer, Title } from "./Signup";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../services/auth.js";
import { useContext } from "react";
import UserContext from "../contexts/contextApi";
import { getCart } from "./cart/Cart.js";

export default function Signin() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const { setDataUser } = useContext(UserContext);
  

  function handleForm({ value, name }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSendForm(e) {
    e.preventDefault();
    signin(form).then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data.token));
      setDataUser(res.data.user);
      navigate("/products");
    }).catch((res) => {
      alert("Revise suas credenciais.");
  })};

  return (
    <SignContainer>
      <Form autoComplete="off">
        <Title>BonecosCabeçudos</Title>

        <Input
          placeholder="Digite seu e-mail"
          name="email"
          type="email"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></Input>
        <Input
          placeholder="Digite sua senha"
          name="password"
          type="password"
          onChange={(e) =>
            handleForm({
              name: e.target.name,
              value: e.target.value,
            })
          }
        ></Input>

        <Button onClick={handleSendForm}>Entrar</Button>

        <span>
          Não tem uma conta?{" "}
          <Link className="link" to="/signup">
            Cadastre-se
          </Link>
        </span>
      </Form>
    </SignContainer>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 400px;
  height: 300px;
  padding: 1rem;

  span {
    margin-top: 1rem;

    .link {
      color: black;
      font-weight: 600;
    }
  }
`;
