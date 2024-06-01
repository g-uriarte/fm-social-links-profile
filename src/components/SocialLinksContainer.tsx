import { FC } from 'react'
import { ListLink } from './ListLinks'
import { UserImage, UserDetails, UserShortDescription } from './User';
import { UserInfo } from '../types/types';

type SocialLinksContainer = {
    userInfo: UserInfo;
}

export const SocialLinksContainer: FC<SocialLinksContainer> = ({
    userInfo
}) => {
    return (
        <div className='xl:w-[400px] xl:h-[650px] w-[350px] h-[650px] bg-social-dark-grey rounded-md flex flex-col xl:pt-15 pt-10 xl:pb-5 pb-1 px-5 gap-5' >
            <div className='flex flex-col gap-5'>
                <UserImage image={userInfo.image} alt={userInfo.name + ' image'} />
                <UserDetails name={userInfo.name} location={userInfo.location} />
                <UserShortDescription description={userInfo.shortDescription} />
            </div>
            <ListLink socialLinks={userInfo.socialLinks} />
        </div>
    )
}
