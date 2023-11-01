import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';

function Twitter(){
    const { data } = React.useContext( ContextSearchUser );

    if(data.twitter_username){
        return(
            <div className='profile-contact'>
                <div><FaTwitter/></div>
                <div><p className='location'>{data.twitter_username}</p></div>
            </div>
        );
    }
    return(
        <div className='profile-contact not-available'>
            <FaTwitter/>
            <p className='location'>Not available</p>
        </div>
    );
}

export { Twitter };