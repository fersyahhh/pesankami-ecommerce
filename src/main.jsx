import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/home.jsx";
import { CategoryProvider } from "./context/categoryContext.jsx";
import { SearchProvider } from "./context/searchContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { PaymentProvider } from "./context/paymentContext.jsx";
import { ModalProvider } from "./context/modalContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { LogoutProvider } from "./context/logoutContext.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <CartProvider>
          <PaymentProvider>
            <ModalProvider>
              <AuthProvider>
                <LogoutProvider>
                  <RouterProvider router={router} />
                </LogoutProvider>
              </AuthProvider>
            </ModalProvider>
          </PaymentProvider>
        </CartProvider>
      </SearchProvider>
    </CategoryProvider>
  </StrictMode>,
);
