import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ showAuth, setShowAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
