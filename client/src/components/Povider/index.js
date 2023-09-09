import { createContext, useState } from 'react';

export const ContextProvider = createContext();

function Provider({ children }) {
    const [theme, setTheme] = useState('theme1');
    return (
        <div>
            <ContextProvider.Provider value={{ theme, setTheme }}>{children}</ContextProvider.Provider>
        </div>
    );
}

export default Provider;
