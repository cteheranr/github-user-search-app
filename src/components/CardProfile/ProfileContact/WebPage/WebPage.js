import React from 'react';
import { FaLink } from "react-icons/fa";
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';

function WebPage(){
    const { data } = React.useContext( ContextSearchUser )
    if(data.blog){
        return(
            <div className='profile-contact'>
                <div><FaLink/></div>
                <div><a href={data.blog}>{data.blog}</a></div>
            </div>
        );
    }
    return(
        <div className='profile-contact not-available'>
            <FaLink/>
            <p className='location'>Not available</p>
        </div>
    );
}

export { WebPage };