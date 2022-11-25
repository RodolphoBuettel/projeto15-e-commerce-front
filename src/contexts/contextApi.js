import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {

    
    return (
        <UserContext.Provider value>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };