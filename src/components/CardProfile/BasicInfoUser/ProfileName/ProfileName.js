import React from 'react';
import './ProfileName.css';
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';

function ProfileName(){
    const { data } = React.useContext(ContextSearchUser);
    return(
        <h1 className='profile-name'>
            {data.name}
        </h1>
    )
}

export { ProfileName };