import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import { functionReducer } from "./functionReducer";
import "./index.css";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

const ToDoApp = () => {
    const [todos, dispatch] = useReducer(functionReducer, [], init);
    const [{ title }, handleChange, reset] = useForm({
        title: "",
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (id) => {
        const action = {
            type: "delete",
            payload: id,
        };

        dispatch(action);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.length <= 0) return alert("Campos incompletos");

        const newToDo = {
            id: Date.now(),
            title,
            done: false,
        };

        const action = {
            type: "add",
            payload: newToDo,
        };

        dispatch(action);

        reset();
    };
    return (
        <>
            <div className="container mt-4">
                <h3>ToDO - APP {todos.length} </h3>
                <div className="row">
                    <div className="col-7">
                        <ol className="list-group list-group-flush">
                            {todos.map((todo, idx) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item mb-2"
                                >
                                    <p className="text-center">
                                        {idx + 1}.- {todo.title}
                                    </p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="col-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Enter your title"
                                    className="form-control mb-2"
                                    value={title}
                                    onChange={handleChange}
                                    name="title"
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Save Data"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoApp;
