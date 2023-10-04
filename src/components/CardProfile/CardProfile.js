import './CardProfile.css';
import { Avatar } from './Avatar/Avatar';
import { ProfileName } from './BasicInfoUser/ProfileName/ProfileName';
import { DateRegister } from './BasicInfoUser/DateRegister/DateRegister';
import { UserName } from './BasicInfoUser/UserName/UserName';
import { ProfileBiography } from './BasicInfoUser/ProfileBiography/ProfileBiography';
import { Repos } from './ProfileStats/Repos/Repos';
import { ProfileStats } from './ProfileStats/ProfileStats';

function CardProfile(){
    return(
        <div className='card-profile'>
            <div className='avatar'>
                <Avatar/>
            </div>
            <div className='basic-info-user'> 
                <div className='name-date'>
                    <ProfileName/>
                    <DateRegister/>
                </div>
                <UserName/>
                <ProfileBiography/>
                <ProfileStats/>
            </div>
        </div>
    )
}

export { CardProfile };