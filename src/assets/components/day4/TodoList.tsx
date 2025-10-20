import { useState } from "react";

const TodoList = () => {
  const [listaTodo, setListaTodo] = useState<string[]>([]);
  // const [valor, setValor] = useState<string>('')

  const handleRemover = (indice: number) => {
    const novoIndice = listaTodo.filter((item, index) => index !== indice);

    setListaTodo(novoIndice);
  };

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const valor = formData.get("todoadd") as string;
    console.log(valor);

    if (!valor.trim()) return;
    setListaTodo((prev) => [...prev, valor]);
    event.currentTarget.reset();
  };

  return (
    <>
      <h2>Lista de Todo</h2>
      <form onSubmit={handleAdd}>
        <input type="text" placeholder="lista todo" name="todoadd" />
      </form>

      <ul>
        {listaTodo.map((item, index) => (
          <div>
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <span>{item ? item : "Não tem nada a fazer ainda"}</span>
              <button onClick={() => handleRemover(index)}>Remover</button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export { TodoList };
