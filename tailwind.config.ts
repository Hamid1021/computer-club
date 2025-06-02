// tailwind.config.ts
import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'image-box-right': "5px 5px 5px 0px #cedec3, 10px 10px 5px 0px #cedec3, 15px 15px 5px 0px #cedec3",
                'image-box-left': "-5px 5px 5px 0px #cedec3, -10px 10px 5px 0px #cedec3, -15px 15px 5px 0px #cedec3"
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.gray,
                red: colors.red,
                yellow: colors.yellow,
                green: colors.green,
                blue: colors.blue,
                indigo: colors.indigo,
                purple: colors.purple,
                pink: colors.pink,
                primary: {
                    light: '#f5f3f0',
                    DEFAULT: '#8e6c88',
                    dark: '#5d4a5a',
                },
                secondary: {
                    light: '#f8f4e9',
                    DEFAULT: '#d4b483',
                    dark: '#b3966b',
                },
                accent: {
                    DEFAULT: '#a83b3b',
                },
                background: "var(--background)",
                foreground: "var(--foreground)"
            },
            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem'
            },
            fontSize: {
                xs: '.75rem',
                sm: '.875rem',
                tiny: '.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem'
            },
            animation: {
                spin: 'spin 3s linear infinite',
                ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                bounce: 'bounce 1s infinite',
                fadein: 'fade-in 3s ease-in-out infinite',
                fadeout: 'fade-out 3s ease-out infinite',
                fadeindown: 'fade-in-down 3s ease-in infinite',
                fadeinup: 'fade-in-up 0.8s ease-out forwards', // Updated duration to match previous code
                fadeinleft: 'fade-in-left 3s ease-in-out infinite',
                fadeinright: 'fade-in-right 3s ease-in-out infinite',
                fadeoutdown: 'fade-out-down 3s ease-in-out infinite',
                fadeoutup: 'fade-out-up 3s ease-in-out infinite',
                fadeoutleft: 'fade-out-left 3s ease-in-out infinite',
                fadeoutright: 'fade-out-right 3s ease-in-out infinite',
                fadeouttopleft: 'fade-out-top-left 3s ease-in-out infinite',
                fadeouttopright: 'fade-out-top-right 3s ease-in-out infinite',
                marquee: 'marquee 40s linear infinite',
                pause: 'paused',
                'diagonal-light': 'diagonal-light 5s infinite',
                'pulse-custom': 'pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Added
                'bounce-slow': 'bounce-slow 3s ease-in-out infinite', // Added
            },
            keyframes: {
                'diagonal-light': {
                    '0%': { transform: 'translateX(100%) rotate(15deg)', opacity: '1' },
                    '28.57%': { transform: 'translateX(-15800%) rotate(15deg)', opacity: '0' },
                    '100%': { transform: 'translateX(-100%) rotate(15deg)', opacity: '0' },
                },
                marquee: {
                    '0%': { transform: 'translateX(10%)' },
                    '100%': { transform: 'translateX(-200%)' },
                },
                spin: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(180deg)' }
                },
                ping: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '75%, 100%': { transform: 'scale(2)', opacity: '0' }
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '.5' }
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-25%)' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-out': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                'fade-in-down': {
                    '0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
                    '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' }, // Modified to match HTML
                    '100%': { opacity: '1', transform: 'translateY(0)' }, // Modified to match HTML
                },
                'fade-in-left': {
                    '0%': { opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
                    '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                },
                'fade-in-right': {
                    '0%': { opacity: '0', transform: 'translate3d(100%, 0, 0)' },
                    '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                },
                'fade-out-down': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
                },
                'fade-out-up': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
                },
                'fade-out-left': {
                    '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                    '100%': { opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
                },
                'fade-out-right': {
                    '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                    '100%': { opacity: '0', transform: 'translate3d(100%, 0, 0)' },
                },
                'fade-out-top-left': {
                    '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                    '100%': { opacity: '0', transform: 'translate3d(-100%, -100%, 0)' },
                },
                'fade-out-top-right': {
                    '0%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
                    '100%': { opacity: '0', transform: 'translate3d(100%, -100%, 0)' },
                },
                // Custom keyframe for pulse-custom animation (from the HTML code)
                'pulse-custom': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '.7' },
                },
                // Custom keyframe for bounce-slow animation (from the HTML code)
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            screens: {
                xs: '360px',
                '2xs': '285.71px'
            },
            fontFamily: {
                irYekan: ['var(--font-irYekan)', 'sans-serif'],
                farhang: ['Farhang', 'sans-serif'],
                vazir: ['var(--font-vazir-medium)', 'sans-serif'],
                sahel: ['var(--font-sahel)', 'sans-serif'],
            }
        }
    },
    plugins: []
} satisfies Config;