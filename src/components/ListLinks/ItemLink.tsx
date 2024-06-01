import { ComponentProps, FC } from 'react'

type ItemLinkProps = {
    text: string;
    link: string;
} & ComponentProps<'a'>

export const ItemLink: FC<ItemLinkProps> = ({
    link, text, ...props
}) => {
    return (
        <a
            className='text-sm text-center font-semibold text-social-white p-4 hover:bg-social-green hover:text-black bg-social-grey rounded-md'
            href={link}
            target='_blank'
            {...props}
        >
            {text}
        </a>
    );
}
