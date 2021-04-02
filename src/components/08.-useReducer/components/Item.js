import React from "react";

const Item = ({ todo, handleDelete, handleToggle }) => {
    return (
        <>
            <li key={todo.id} className="list-group-item mb-2">
                <p
                    onClick={() => handleToggle(todo.id)}
                    className={todo.done && "complete"}
                >
                    {todo.title}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                >
                    Delete
                </button>
            </li>
        </>
    );
};

export default Item;
