import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';

function ProfileCity(){
    const { data } = React.useContext( ContextSearchUser )
    if (data.location){
        return(
            <div className='profile-contact'>
                <FaMapMarkerAlt/>
                <p className='location'>{data.location}</p>
            </div>
        );
    }
    return(
        <div className='profile-contact not-available'>
            <FaMapMarkerAlt/>
            <p className='location'>Not available</p>
        </div>
    )
}

export { ProfileCity };