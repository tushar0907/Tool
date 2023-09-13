/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background': "url('https://r4.wallpaperflare.com/wallpaper/684/422/438/abstract-3d-digital-art-stu-ballinger-wallpaper-2b965cfd43817fe9f584cbf97d1cfc40.jpg')"
      },
    },
  },
  plugins: [],
}
