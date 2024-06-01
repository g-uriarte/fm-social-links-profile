/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				"social-off-black": "hsl(0, 0%, 8%)",
				"social-dark-grey": "hsl(0, 0%, 12%)",
				"social-green": "hsl(75, 94%, 57%)",
				"social-grey": "hsl(0, 0%, 20%)",
			},
			textColor: {
				"social-white": 'hsl(0, 0%, 100%)',
				"grayish-blue": "hsl(219, 14%, 63%)",
				"dark-grayish-blue": "hsl(219, 12%, 42%)",
				"very-dark-blue": "hsl(224, 21%, 14%)",
				"social-green": "hsl(75, 94%, 57%)",
			},
		},
	},
	plugins: [],
};
