import { createContext, useState } from "react"; 

const UserContext = createContext();

function UserProvider({ children }) {

    const [datauser, setDataUser] = useState(); 
    return (
        <UserContext.Provider value={{datauser, setDataUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };