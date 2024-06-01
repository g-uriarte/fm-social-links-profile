import { SocialLink, UserInfo } from "../types/types";

const links: SocialLink[] = [
	{
		name: "Github",
		link: "https://github.com/"
	},
	{
		name: "Frontend Mentor",
		link: "https://www.frontendmentor.io/"
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/"
	},
	{
		name: "Twitter",
		link: "https://twitter.com/"
	},
	{
		name: "Reddit",
		link: "https://reddit.com/"
	},
];

export const USER_INFO: UserInfo = {
	name: 'Jessica Randall',
	image: 'https://i.pravatar.cc/300?img=22',
	location: 'London, United kingdom',
	shortDescription: 'Front-end developer and avid reader.',
	socialLinks: links
};