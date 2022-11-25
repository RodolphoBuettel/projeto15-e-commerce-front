import { createContext, useState } from "react"; 

const UserContext = createContext();

function UserProvider({ children }) {

    const [datauser, setDataUser] = useState(); 
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [numberCard, setNumberCard] = useState("");
    const [nameCard, setNameCard] = useState("");
    const [validity, setValidity] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    return (
        <UserContext.Provider value={{datauser, setDataUser, email, setEmail, name, setName, lastName, setLastName, country, setCountry,
            city, setCity, address, setAddress, numberCard, setNumberCard, nameCard, setNameCard, validity, setValidity, 
            securityCode, setSecurityCode}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };