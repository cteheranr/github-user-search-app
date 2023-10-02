import React from 'react';
import { ContextSearchUser } from '../../../Contexts/ContextSearchUser/ContextSearchUser';
import './ButtonSearch.css';

function ButtonSearch(){
    const { getUser, inputValue } = React.useContext(ContextSearchUser);

    return (
        <button className='btn-search' onClick={()=>{
            getUser(inputValue)
        }} >
            Search
        </button>
    );
}

export { ButtonSearch };