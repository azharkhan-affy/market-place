/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				'50': '#f2fbfa',
  				'100': '#d4f3ef',
  				'200': '#aae5e0',
  				'300': '#77d1cc',
  				'400': '#4bb6b4',
  				'500': '#329d9c',
  				'600': '#257b7c',
  				'700': '#216364',
  				'800': '#1f4e50',
  				'900': '#1e4143',
  				'950': '#0c2427',
  				DEFAULT: '#329d9c'
  			},
  			secondary: {
  				'50': '#f1fcf3',
  				'100': '#defae5',
  				'200': '#bff3cb',
  				'300': '#7be495',
  				'400': '#54d474',
  				'500': '#2dba51',
  				'600': '#20993f',
  				'700': '#1c7934',
  				'800': '#1b602d',
  				'900': '#184f28',
  				'950': '#082b12',
  				DEFAULT: 'hsl(var(--secondary))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			keyframes: {
  				'caret-blink': {
  					'0%,70%,100%': {
  						opacity: '1'
  					},
  					'20%,50%': {
  						opacity: '0'
  					}
  				}
  			},
  			animation: {
  				'caret-blink': 'caret-blink 1.25s ease-out infinite'
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
