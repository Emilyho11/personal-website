/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				Blue: "#0a0e1a",
			},
			width: {
				"1/8": "12.5%",
        "1/10": "10%",
			},
		},
	},
	plugins: [],
};
