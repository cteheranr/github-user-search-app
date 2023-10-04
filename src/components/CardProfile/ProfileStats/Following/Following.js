import React from 'react';
import './Following.css';
import { ContextSearchUser } from '../../../../Contexts/ContextSearchUser/ContextSearchUser';
import { TitleStat } from '../Atom/TitleStat/TitleStat';
import { NumberStat } from '../Atom/NumberStat/NumberStat';

function Following(){
    const { data } = React.useContext(ContextSearchUser);
    return(
        <div className='following'>
            <TitleStat title="Following"/>
            <NumberStat number={data.following}/>
        </div>
    );
}

export { Following };