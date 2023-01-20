import { createContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const { isAuthenticated, user } = useAuth0();
    console.log({ isAuthenticated, user })
    return (
        <AuthContext.Provider value={{ isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
}