import { useEffect, useState } from "react";
import "./css/style.css";

const TodoList = () => {
    const [todoList, setTodoList] = useState<string[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const valor = formData.get("input-todo") as string;
        if (!valor.trim()) {
            alert("Coloque algumas task antes de tentar adicionar");
            return;
        }
        setTodoList((prev) => [...prev, valor]);
        e.currentTarget.reset();
    };

    const handleRemove = (id: number) => {
        const newTodo = todoList.filter((todo, index) => index !== id);
        setTodoList(newTodo);
    };

    

    const handleEdit = (index: number) => {
        const novaLista = [...todoList];
        novaLista[index] = editText;
        setTodoList(novaLista);
        setEditIndex(null); 
        setEditText("");
    };

    useEffect(() => {
        const SavedList = localStorage.getItem("list");
        if (SavedList) {
            setTodoList(JSON.parse(SavedList));
        }
    }, []);

    useEffect(() => {
        if (todoList.length > 0) {
            localStorage.setItem("list", JSON.stringify(todoList));
        }
    }, [todoList]);



    return (
        <>
            <section className="container">
                <form className="form-container" onSubmit={handleAdd}>
                    <h1>Todo List</h1>
                    <input
                        type="text"
                        name="input-todo"
                        id="input-todo"
                        placeholder="Digite sua task"
                    />
                </form>
                <div>
                    <ul className="container-list">
                        {todoList.map((todo, index) => (
                            <div className="list-todo" key={index}>
                                <div className="todo-item">
                                    <span className="icon-list"></span>

                                    {editIndex === index ? (
                                        
                                        <>
                                            <input
                                                type="text"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") handleEdit(index);
                                                }}
                                                autoFocus
                                            />
                                            <button onClick={() => handleEdit(index)}>Salvar</button>
                                        </>
                                    ) : (
                                        
                                        <li>{todo}</li>
                                    )}
                                </div>

                                <div>
                                    <button className="remove-btn" onClick={() => handleRemove(index)}>
                                        X
                                    </button>

                                    {editIndex === index ? null : (
                                        <button
                                            onClick={() => {
                                                setEditIndex(index);
                                                setEditText(todo);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export { TodoList };
