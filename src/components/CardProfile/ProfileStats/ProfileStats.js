import { Repos } from "./Repos/Repos";
import { Followers } from "./Followers/Followers";
import './ProfileStats.css';
import { Following } from "./Following/Following";

function ProfileStats(){
    return(
        <div className="profile-stat">
            <Repos/>
            <Followers/>
            <Following/>
        </div>
    );
}

export { ProfileStats };