/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	important: true,
	theme: {
		extend: {
			backgroundColor: {
				'primary-dark': '#222427'
			},
			fontFamily: {
				display: '"gg sans","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
			}
		}
	},
	plugins: []
};
