import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export function ModalProvider({children}) {
    const [showModal, setShowModal] = useState(false)

    return (
        <ModalContext.Provider value={{showModal, setShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
    return useContext(ModalContext)
}
