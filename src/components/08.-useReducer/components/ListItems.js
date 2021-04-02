import React from "react";
import Item from "./Item";

const ListItems = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <ol className="list-group list-group-flush">
                {todos.map((todo) => (
                    <Item
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))}
            </ol>
        </>
    );
};

export default ListItems;
