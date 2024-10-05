/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				primary: "#145433",
				secondary: "#356550",
				accent: "#ffffff",
				background: "#e6e2d6",
				hover: "#004115",
				highlight: "#799288",
				error: "#9c3d33",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
