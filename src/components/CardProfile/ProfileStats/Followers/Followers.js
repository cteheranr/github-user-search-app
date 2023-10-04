import { TitleStat } from "../Atom/TitleStat/TitleStat";
import { NumberStat } from "../Atom/NumberStat/NumberStat";
import React from "react";
import { ContextSearchUser } from "../../../../Contexts/ContextSearchUser/ContextSearchUser";

function Followers(){
    const { data } = React.useContext(ContextSearchUser);
    return(
        <div className="stat-followers">
            <TitleStat title="Followers" />
            <NumberStat number={data.followers} />
        </div>
    );
}

export { Followers };