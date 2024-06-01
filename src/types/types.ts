export interface SocialLink {
    name: string;
    link: string;
}

export interface UserInfo {
    name: string;
    location: string;
    image: string;
    shortDescription: string;
    socialLinks: SocialLink[];
}