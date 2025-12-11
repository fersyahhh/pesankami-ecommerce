import { createContext, useContext, useState } from "react";

const LogoutContext = createContext()

export function LogoutProvider({children}) {
    const [showLogout, setShowLogout] = useState(false)

    return (
        <LogoutContext.Provider value={{showLogout, setShowLogout}}>
            {children}
        </LogoutContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLogout() {
    return useContext(LogoutContext)
}
