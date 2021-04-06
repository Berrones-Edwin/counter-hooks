import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h3>Home</h3>
            <h4>{JSON.stringify(user,null,3)}</h4>
        </div>
    );
};

export default HomeScreen;
