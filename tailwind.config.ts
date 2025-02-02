import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
  theme: {
  	fontFamily: {
  		sans: [
  			'var(--font-geist-sans)'
  		],
  		caption: [
  			'var(--font-caption)'
  		]
  	},
  	extend: {
		animation: {
		  'rotate-45': 'rotate-45 1s linear infinite',
		  'rotate-90': 'rotate-90 1s linear infinite',
		  'rotate-360': 'rotate-360 10s linear infinite',
		},
		keyframes: {
		  'rotate-45': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(45deg)' },
		  },
		  'rotate-90': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(90deg)' },
		  },
		  'rotate-360': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		},
	  },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
