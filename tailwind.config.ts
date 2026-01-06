
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#dc2626',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#f8f9fa',
					foreground: '#212529'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#e9ecef',
					foreground: '#6c757d'
				},
				accent: {
					DEFAULT: '#dc2626',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'float-1': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.6'
					},
					'33%': {
						transform: 'translate(100px, -80px) scale(1.1)',
						opacity: '0.8'
					},
					'66%': {
						transform: 'translate(-80px, 60px) scale(0.9)',
						opacity: '0.5'
					}
				},
				'float-2': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.5'
					},
					'33%': {
						transform: 'translate(-120px, 100px) scale(1.2)',
						opacity: '0.7'
					},
					'66%': {
						transform: 'translate(90px, -70px) scale(0.85)',
						opacity: '0.4'
					}
				},
				'float-3': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.4'
					},
					'25%': {
						transform: 'translate(60px, 80px) scale(1.15)',
						opacity: '0.6'
					},
					'50%': {
						transform: 'translate(-100px, -60px) scale(0.95)',
						opacity: '0.5'
					},
					'75%': {
						transform: 'translate(80px, -40px) scale(1.05)',
						opacity: '0.45'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'scale-in': 'scale-in 0.3s ease-out',
				'float-1': 'float-1 15s ease-in-out infinite',
				'float-2': 'float-2 20s ease-in-out infinite',
				'float-3': 'float-3 18s ease-in-out infinite'
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
