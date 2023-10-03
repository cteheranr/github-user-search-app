import './UserName.css';
import React from "react";
import { ContextSearchUser } from "../../../../Contexts/ContextSearchUser/ContextSearchUser";

function UserName(){
    const { data } = React.useContext(ContextSearchUser);
    return(
        <p className="username">{`@${data.login}`}</p>
    );
}

export { UserName };