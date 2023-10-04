import { TitleStat } from "../Atom/TitleStat/TitleStat";
import { NumberStat } from "../Atom/NumberStat/NumberStat";
import React from "react";
import { ContextSearchUser } from "../../../../Contexts/ContextSearchUser/ContextSearchUser";

function Repos(){
    const { data } = React.useContext(ContextSearchUser);
    return(
        <div className="stat-repos">
            <TitleStat title="Repos"/>
            <NumberStat number= {data.public_repos}/>
        </div>
    );
}

export { Repos };