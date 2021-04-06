import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h3>About Screen</h3>
            <pre> {JSON.stringify(user, null, 3)} </pre>
            <button onClick={() => setUser({})}>Logout</button>
        </div>
    );
};

export default AboutScreen;
