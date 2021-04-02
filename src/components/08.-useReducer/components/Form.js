import React from "react";
import { useForm } from "../../../hooks/useForm";

const Form = ({addToDo}) => {

    const [{ title }, handleChange, reset] = useForm({
        title: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.length <= 0) return alert("Campos incompletos");

        const newToDo = {
            id: Date.now(),
            title,
            done: false,
        };

        addToDo(newToDo)

        reset();
    };
    return (
        <>
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
        </>
    );
};

export default Form;
