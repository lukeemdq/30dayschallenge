import { useState } from "react"




const Contador = () => {
    const [contador, setContador]  = useState<number>(0) 

    const handleSubtration = (): void => {

        if(contador > 0) {
            setContador(contador - 1)
        }
        
    }
    

    return (
        <>
        <div>
            <button onClick={handleSubtration}>-</button>
            <p>{contador}</p>
            <button onClick={() => setContador( contador + 1)}>+</button>
            <button onClick={() => setContador(0)}>Reset</button>
        </div>
        </>
    )
}

export {Contador}