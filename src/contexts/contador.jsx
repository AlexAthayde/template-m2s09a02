import { createContext, useContext, useState } from "react"

// const ContadorContext = createContext({
//     contador: 0,
//     incrementar: ()=>{},
//     decrementar: ()=>{}
// })

// export function ContadorProvider({ children }) {
//     const [contador, setContador] = useState(0)

//     function incrementar() {
//         setContador(prevState => prevState + 1)
//     }

//     function decrementar() {
//         setContador(prevState => prevState - 1)
//     }

//     return <ContadorProvider.Provider value={{ contador, incrementar, decrementar }}>{children}</ContadorProvider.Provider>
// }

// export function useContador() {
//     const contexto = useContext(ContadorContext)

//     return contexto
// }

export const ContadorContext = createContext({
    contador: 0,
    incrementar: () => {},
    decrementar: () => {}
}) 

export function ContadorProvider({ children }) {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(prevState => prevState + 1)
    }

    function decrementar() {
        setContador(prevState => prevState - 1)
    }

    return <ContadorContext.Provider value={{ contador, incrementar, decrementar }}>{children}</ContadorContext.Provider>
}

export function useContador() {
    const contexto = useContext(ContadorContext)

    return contexto
}