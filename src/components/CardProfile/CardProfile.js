import './CardProfile.css';
import { Avatar } from './Avatar/Avatar';
import { ProfileName } from './BasicInfoUser/ProfileName/ProfileName';

function CardProfile(){
    return(
        <div className='card-profile'>
            <div className='basic-info-user'>
                <Avatar/>
                <ProfileName/>
            </div>
        </div>
    )
}

export { CardProfile };