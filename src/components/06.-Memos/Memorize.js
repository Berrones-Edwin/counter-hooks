import React, { useState } from "react";
import Small from "./Small";
import { useCounter } from "../../hooks/useCounter";

const Memorize = () => {
    const [counter, increment] = useCounter(5);
    const [display, setDisplay] = useState(true);
    return (
        <>
            <div className="container">
                <h3>Memorize</h3>
                <Small value={counter} />
                <button className="btn btn-primary" onClick={increment}>
                    +
                </button>
                <button onClick={() => setDisplay(!display)}>Show/ Hide</button>
            </div>
        </>
    );
};

export default Memorize;
