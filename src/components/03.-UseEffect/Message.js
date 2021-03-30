import React, { useState, useEffect } from "react";

const Message = () => {
    const [coords, setCoords] = useState({});

    const { x, y } = coords;

    const mouseMoveEvent = ({ x, y }) => {
        setCoords({ x, y });
        console.log(x,y)
    };

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveEvent);
        return () => {
            window.removeEventListener("mousemove", mouseMoveEvent);
            console.log("phase unmounted");
            
        };
    }, []);
    return (
        <>
            <h3>Eres genial</h3>
            <p>{x}</p>
            <p>{y}</p>
        </>
    );
};

export default Message;
