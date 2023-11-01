import React from 'react';
import { BiSolidBuildings } from "react-icons/bi";
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';

function Organization(){
    const { data } = React.useContext( ContextSearchUser )
    if(data.company){
        return(
            <div className='profile-contact'>
                <BiSolidBuildings/>
                <p className='location'>{data.company}</p>
            </div>
        );
    }
    return(
        <div className='profile-contact not-available'>
            <BiSolidBuildings/>
            <p className='location'>Not available</p>
        </div>
    )
}

export { Organization };