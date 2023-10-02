import React from 'react';
import './InputSearch.css';
import { ContextSearchUser } from '../../../Contexts/ContextSearchUser/ContextSearchUser';

function InputSearch(){
    const { inputValue, SetInputValue } = React.useContext( ContextSearchUser );

    return(
        <input placeholder='Search GitHub username...' className='input-search'
            onChange={(event) => {
                console.log(event.target.value)
                SetInputValue(event.target.value)
            }}
        />
    )
}

export { InputSearch };