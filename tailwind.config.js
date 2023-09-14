/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffe6bf",
        
"secondary": "#14a5aa",
        
"accent": "#7ba8fc",
        
"neutral": "#1a141f",
        
"base-100": "#eaeaf6",
        
"info": "#42bee0",
        
"success": "#64ddc9",
        
"warning": "#df910c",
        
"error": "#de4745",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

