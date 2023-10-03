import React from "react";
import { ContextSearchUser } from "../../../../Contexts/ContextSearchUser/ContextSearchUser";
import { format } from 'date-fns';
import './DateRegister.css';

function DateRegister(){
    const { data } = React.useContext(ContextSearchUser);
    let dateFormat = '';
    if(data.created_at){
        const dateRegister = new Date(data.created_at);
        console.log('Date:', data.created_at);
        dateFormat = format(dateRegister, 'dd MMM yyyy');
    }

    return(
        <>
            <p className="date-register">
                {`Joined ${dateFormat}`}
            </p>
        </>
    )
}

export { DateRegister };