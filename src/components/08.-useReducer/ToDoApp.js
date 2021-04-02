import React, { useEffect, useReducer } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import { functionReducer } from "./functionReducer";
import "./index.css";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];

const ToDoApp = () => {
    const [todos, dispatch] = useReducer(functionReducer, [], init);

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
    const handleToggle = (id) => {
        dispatch({
            type: "toggle",
            payload: id,
        });
    };
    const addToDo = (todo) => {
        dispatch({
            type: "add",
            payload: todo,
        });
    };

    return (
        <>
            <div className="container mt-4">
                <h3>ToDO - APP {todos.length} </h3>
                <div className="row">
                    <div className="col-7">
                        <ListItems
                            todos={todos}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    </div>
                    <div className="col-5">
                        <Form addToDo={addToDo} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoApp;
