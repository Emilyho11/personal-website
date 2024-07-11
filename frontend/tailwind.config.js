/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark_blue: "#2A2F4F",
				back_light_blue: "#D0E4F3",
				light_blue: "#EBF1F5",
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
