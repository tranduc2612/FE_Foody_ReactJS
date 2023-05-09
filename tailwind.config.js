/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,js,jsx,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				"regal-blue": "#243c5a",
				"bg-header": "#f9f9f9",
			},
		},
	},
	plugins: [],
};
