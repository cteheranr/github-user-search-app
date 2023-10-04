import './ProfileBiography.css';
import React from 'react';
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';

function ProfileBiography(){
    const { data } = React.useContext(ContextSearchUser);
    const biography = data.bio || 'This profile has no bio'

    return(
        <p className='profile-biography'>
            {biography}
        </p>
    );
}

export { ProfileBiography };