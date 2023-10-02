import React from 'react';
import { ContextSearchUser } from '../../../Contexts/ContextSearchUser/ContextSearchUser';
import './Avatar.css';

function Avatar(){
    const { data } = React.useContext(ContextSearchUser);

    return(
        <img src={data.avatar_url} className='avatar' />
    );
}

export { Avatar };