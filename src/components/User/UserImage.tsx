import { FC } from 'react'

type UserImageProps = {
    image: string;
    alt: string;
}

export const UserImage: FC<UserImageProps> = ({ 
    image, alt
}) => {
    return (
        <div className='flex items-center justify-center'>
            <img
                src={image}
                alt={alt}
                className='object-cover h-28 w-28 rounded-full'
            />
        </div>
    )
}
