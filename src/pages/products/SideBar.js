import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";



export default function SideBar({ user, display, setDisplay, setPosition }) {

    const {userData, setUserData } = user;

    const name = userData?.name.trim()[0];

    const navigate = useNavigate();

    function CloseMenu() {
        setDisplay("none");
        setPosition("");
    }

    function signout(){
        const token = localStorage.getItem("token");
        if(!!token){
            localStorage.removeItem("token");
            setUserData({});
            navigate("/products");
        }
        
    }

    return (
        <>
            <Sidebar display={display}>
                <Close onClick={CloseMenu}>
                    <ion-icon name="close-outline"></ion-icon>
                </Close>
                <Perfil>
                    <ion-icon name="person-circle-sharp"></ion-icon>
                    <span>{name ? `Olá ${name}` : <Link to="/signin">Faça Login</Link>}  </span>
                </Perfil>
                <Sideways>
                    <ul>
                        <li><h2>PRODUCTS</h2></li>
                    </ul>
                    <ProductsContent>
                        <ul>
                            <li><h3 onClick={()=> navigate("/products")}>Produtos</h3></li>
                            <li><h3 onClick={()=> signout()}>Sair</h3></li>
                        </ul>
                    </ProductsContent>
                </Sideways>
            </Sidebar>
           
        </>
    )
}


const Sidebar = styled.div`
 display: ${props => props.display};
    min-width: 20rem;
    background-color: #f3f3f7;
    padding-bottom: 1rem;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100%;
    z-index: 6;

    Link{
        font-size: 15px;
        text-decoration: none;
    }
   
`
const Close = styled.div`
    font-size: 50px;
    position: fixed;
    top: 20px;
    right: 20px;
`
const Perfil = styled.div`
font-size: 50px;
    
    margin-top: 20px;
    margin-left: 20px;

    span{
        font-size: 15px;
    }
`
const Sideways = styled.div`
margin-top: 40px;
h2{
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
}
`
const ProductsContent = styled.div`
margin-top: 30px;

li{
    background-color: gray;
    h3{
        margin-left: 20px;
        font-size: 20px;
    }
}
`