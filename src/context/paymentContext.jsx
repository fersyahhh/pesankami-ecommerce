import { createContext, useContext, useState } from "react";

const PaymentContext = createContext()

export function PaymentProvider({children}) {
    const [showPayment, setShowPayment] = useState(false)

    return (
        <PaymentContext.Provider value={{showPayment, setShowPayment}}>
            {children}
        </PaymentContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePayment() {
    return useContext(PaymentContext)
}