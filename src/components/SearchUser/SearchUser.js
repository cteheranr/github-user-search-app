import './SearchUser.css';
import { InputSearch } from './InputSearch/InputSearch';
import { IconSearch } from './IconSearch/IconSearch';
import { ButtonSearch } from './ButtonSearch/ButtonSearch';
import React from 'react';
import { ContextSearchUser } from '../../Contexts/ContextSearchUser/ContextSearchUser';

function SearchUser(){
    return(
        <div className='search-username'>
            <IconSearch/>
            <InputSearch/>
            <ButtonSearch/>
        </div>
    )
}

export { SearchUser }