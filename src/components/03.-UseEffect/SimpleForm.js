import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [form, setForm] = useState({ name: "", email: "" });
    const { name, email } = form;

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        });
    };
    useEffect(()=>{
        // console.log('phase mounted')
    },[])
    useEffect(()=>{
        // console.log('form changed')
    },[form])
    useEffect(()=>{
        // console.log('email changed')
    },[email])
    return (
        <>
            <h3>UseEffect</h3>
            <form action="" className="container">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        id="name "
                        autoComplete="off"
                        className="form-control"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        id="email "
                        autoComplete="off"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
            </form>

            { (name==='123') && <Message /> }
        </>
    );
};

export default SimpleForm;
