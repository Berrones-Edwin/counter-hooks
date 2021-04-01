import React, { useState } from "react";
import MultipleCustomHooks from "../03.-Examples/MultipleCustomHooks";

const ExampleReal = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            {show && <MultipleCustomHooks />}
            <button onClick={() => setShow(!show)} className="btn btn-primary">
                Show/Hide
            </button>
        </div>
    );
};

export default ExampleReal;
