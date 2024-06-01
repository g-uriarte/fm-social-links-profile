import { FC } from 'react'
import { SocialLink } from '../../types/types'
import { ItemLink } from './ItemLink'

type ListLinkProps = {
    socialLinks: SocialLink[]
}

export const ListLink: FC<ListLinkProps> = ({
    socialLinks
}) => {
    return (
        <div className='flex flex-col gap-3'>
            {socialLinks.map(sl => (
                <ItemLink  key={sl.link} text={sl.name} link={sl.link} />
            ))}
        </div>
    )
}
