import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const inputRef = useRef(null);
  const contadorRef = useRef<number>(0);
  const [rend, setRend] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleMensagem = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    
    setMensagem(e.target.value)
  }

  // const handleRend = () => {
  //     setRend(!rend)
  // }

  // const handleCLick = () => {
  //     contadorRef.current = contadorRef.current + 1
  //     console.log('Valor interno do useRef:', contadorRef.current);
  // }

  return (
    <>
      <label htmlFor="name" ref={inputRef}>Nome: </label>
      <input type="text" name="name" id="name" placeholder="Nome"  value={mensagem} onChange={handleMensagem}/>
      <p>O input tem {mensagem.trim().length} caracteres uteis sem espaço no começo e no final</p>
      {/* <button onClick={handleCLick}>{contadorRef.current}</button>
      <button onClick={handleRend}>Renderizar</button> */}
    </>
  );
};

export { Ref };
