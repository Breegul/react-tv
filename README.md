allow a user to browse through TV shows and 
be able to see specific information about each show.
search through TV shows via a controlled form as well. 
This is the API: https://www.tvmaze.com/api#show-main-information

The app should have four pages:
- Homepage
- TV shows page - on this page, the user can browser through a gallery of different TV shows and click on a show to see more information about it
- Individual TV show page - on this page, the user can see specific information about a TV show, including the show name, description, image, and rating information
- Search page - on this page, the user can search through the bank of TV shows to find specific shows

You should use:
- Vite
- Routing
- Handle navigation
- Testing
- State management


CONTEXT
import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

import { useAuth } from "../../contexts";
const { setUser } = useAuth();
