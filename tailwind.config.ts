import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#18282d',
        'secondary': '#133953',
        'accent': '#2773A5',
        'dark': '#000',
        'light': '#FDFFFC'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '2px 2px 2px var(--tw-shadow-color)',
        xl: '3px 3px 4px var(--tw-shadow-color)'
      },
      animation: {
        'fade-in': 'fade-in 500ms ease-in-out',
        'nav-open': 'nav-open 200ms ease-in-out',
        'nav-close': 'nav-close 200ms ease-in-out',
        'nav-open-mobile': 'nav-open-mobile 200ms ease-in-out',
        'nav-close-mobile': 'nav-close-mobile 200ms ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translate(0, 4rem)' },
          '75%': { transform: 'translate(0, 0)' },
          '100%': { opacity: '1' }
        },
        'nav-open': {
          '0%': { width: '4rem', 'background-color': 'transparent' },
          '25%': { 'background-color': 'rgb(19 57 83 / var(--tw-bg-opacity))' },
          '100%': { width: '100%' }
        },
        'nav-close': {
          '0%': { width: '100%', 'background-color': 'rgb(19 57 83 / var(--tw-bg-opacity))' },
          '75%': { 'background-color': 'rgb(19 57 83 / var(--tw-bg-opacity))' },
          '100%': { width: '4rem', 'background-color': 'transparent' }
        },
        'nav-open-mobile': {
          '0%': { height: '4rem', 'background-color': 'transparent' },
          '25%': { 'background-color': 'rgb(19 57 83 / var(--tw-bg-opacity))' },
          '100%': { height: '50%' }
        },
        'nav-close-mobile': {
          '0%': { height: '50%', 'background-color': 'rgb(19 57 83 / var(--tw-bg-opacity))' },
          '75%': { 'background-color': 'rgb(19 57 83 / var(--tw-bg-opacity))' },
          '100%': { height: '4rem', 'background-color': 'transparent' }
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
