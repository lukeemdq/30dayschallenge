import { useEffect, useState } from "react";

const Timer = () => {
  
  const [tempo, setTempo] = useState<number>(0);
  const [iniciado, setIniciado] = useState<boolean>(false);

  function handleIniciar() {
    setIniciado(true);
  }

  function handlePausar() {
    setIniciado(false);
  }

  function handleZerar() {
    setIniciado(false); 
    setTempo(0); 
  }

  useEffect(() => {
    let intervalo: number | undefined;

    if (iniciado) {
      intervalo = setInterval(() => {
        
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    }
    
    
    return () => {
      if (intervalo !== undefined) {
        clearInterval(intervalo);
      }
    };
  
  }, [iniciado]); 

  return (
    <>
      <div>
        <h2>Tempo: {tempo} segundos</h2>
        <div>
          <button onClick={handleIniciar} disabled={iniciado}>
            Iniciar
          </button>
          <button onClick={handlePausar} disabled={!iniciado}>
            Pausar
          </button>
          <button onClick={handleZerar}>
            Zerar
          </button>
        </div>
      </div>
    </>
  );
};

export { Timer };