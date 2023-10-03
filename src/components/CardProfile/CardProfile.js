import './CardProfile.css';
import { Avatar } from './Avatar/Avatar';
import { ProfileName } from './BasicInfoUser/ProfileName/ProfileName';
import { DateRegister } from './BasicInfoUser/DateRegister/DateRegister';
import { UserName } from './BasicInfoUser/UserName/UserName';

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
            </div>
        </div>
    )
}

export { CardProfile };