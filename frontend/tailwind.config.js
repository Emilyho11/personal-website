/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark_blue: "#2A2F4F",
				light_blue: "#D0E4F3",
				back_light_blue: "#F1F5F8",
				gray: "#D5DADE"
			},
			width: {
				"1/8": "12.5%",
        "1/10": "10%",
			},
		},
	},
	plugins: [],
};
