import { createContext, useState } from "react"

export const ProfileContext = createContext();
export const ProfileContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState({});

    return (
        <ProfileContext.Provider value = {{currentUser, setCurrentUser}}>{children}</ProfileContext.Provider>
    )
}
