import React, { useReducer } from "react";
import { functionReducer } from "./functionReducer";
import './index.css'
const initialState = [
    {
        id: Date.now(),
        title: "Learn React",
        done: false,
    },
];
const ToDoApp = () => {
    const [todos, dispatch] = useReducer(functionReducer, initialState);
    return (
        <>
            <div className="container mt-4">
                <h3>ToDO - APP </h3>
                <div className="row">
                    <div className="col-7">
                        <ol className="list-group list-group-flush">
                            {todos.map((todo, idx) => (
                                <li key={todo.id} className="list-group-item">
                                    <p className="text-center">
                                        {idx + 1}.- {todo.title}
                                    </p>
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="col-5">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Enter your title"
                                    className="form-control mb-2"
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
