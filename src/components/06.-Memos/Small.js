import React, { memo } from "react";

function Small ({ value }) {
    console.log("Render");
    return (
        <>
            <p>{value}</p>
        </>
    );
}


export default memo(Small)