import { FC } from "react"
import { SocialLinksContainer } from '../components/SocialLinksContainer';
import { USER_INFO } from "../data/socialLinksData"

export const SocialLinksPage: FC = () => {
    return (
        <div className="w-full h-full bg-social-off-black flex items-center justify-center">
            <SocialLinksContainer userInfo={USER_INFO} />
        </div>
    )
}