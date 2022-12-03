import { createContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {

    const [lastId,setLastId]=useState(0)
    const [status,setStatus]=useState('all')
    const [data,setData]=useState([])

    return (
        <ThemeContext.Provider value={{ data,setData,lastId,setLastId,status,setStatus }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext