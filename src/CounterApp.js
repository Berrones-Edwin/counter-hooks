import React, { useState } from "react";
import PropTypes from "prop-types";

export default function CounterApp({ value=7 }) {
    const [counter, setCounter] = useState(value);

    function handleAdd() {
        setCounter(counter + 1);
    }
    function handleSubstract(){
        setCounter(counter -1)
    }
    function handleReset(){
        setCounter(0)
    }
    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
