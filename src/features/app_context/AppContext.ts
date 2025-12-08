import { createContext } from "react";
import type { UserType } from "../../entities/user/api/model/UserType";

type AppContextType = {
    user: UserType | null;
    setUser: (user: UserType | null) => void;
    
};

const init:AppContextType = {
    user: null,
    setUser: () => { 
        throw "Not Implemented";
}
}

const AppContext = createContext<AppContextType>(init);

export {AppContext}
