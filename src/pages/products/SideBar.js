import styled from "styled-components"


export default function SideBar({ display, setDisplay, setPosition }) {

    function CloseMenu() {
        setDisplay("none");
        setPosition("");
    }

    return (
        <>
            <Sidebar display={display}>
                <Close onClick={CloseMenu}>
                    <ion-icon name="close-outline"></ion-icon>
                </Close>
                <Perfil>
                    <ion-icon name="person-circle-sharp"></ion-icon>
                </Perfil>
                <Sideways>
                    <ul>
                        <li><h2>PRODUCTS</h2></li>
                    </ul>
                    <ProductsContent>
                        <ul>
                            <li><h3>Animes</h3></li>
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