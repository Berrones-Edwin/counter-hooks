import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
    const { setUser } = useContext(UserContext);
    return (
        <div>
            <h3>Login</h3>
            <button
                onClick={()=>setUser({
                    id: 1234,
                    username: "user@hotmail.com",
                    pass: "123",
                })}
            >
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
