import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";

const SimpleFormCustomHooks = () => {
    const [values, handleChange] = useForm({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = values;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    // useEffect(()=>{
    //     // console.log('phase mounted')
    // },[])
    // useEffect(()=>{
    //     // console.log('form changed')
    // },[form])
    // useEffect(()=>{
    //     // console.log('email changed')
    // },[email])
    return (
        <>
            <h3>UseEffect</h3>
            <form onSubmit={handleSubmit} className="container">
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
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        id="password "
                        autoComplete="off"
                        className="form-control"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="send" className="btn btn-primary" />
            </form>
        </>
    );
};

export default SimpleFormCustomHooks;
