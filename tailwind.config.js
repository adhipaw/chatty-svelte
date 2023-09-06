/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	important: true,
	theme: {
		extend: {
			backgroundColor: {
				'primary-dark': '#222427',
				'btn-primary': '#3d4aa5'
			},
			colors: {
				accent: '#2e6ea1',
				'white-light': '#7f8287'
			},
			fontFamily: {
				display: '"gg sans","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
			},
			borderRadius: {
				primary: '0.3rem'
			}
		}
	},
	plugins: []
};
