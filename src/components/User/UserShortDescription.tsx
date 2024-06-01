import { FC } from 'react'

type UserShortDescriptionProps = {
    description: string;
}

export const UserShortDescription: FC<UserShortDescriptionProps> = ({
    description
}) => {
    return (
        <div className='flex flex-col items-center'>
            <p className='text-sm text-social-white'>"{description}"</p>
        </div>
    );
}
