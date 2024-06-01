import { FC } from 'react'

type UserDetailsProps = {
    name: string;
    location: string;
}

export const UserDetails: FC<UserDetailsProps> = ({
    name, location
}) => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold text-social-white '>{name}</h1>
            <p className='text-md font-semibold text-social-green '>{location}</p>
        </div>
    );
}
