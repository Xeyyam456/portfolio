//tailwind ekle


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

tailwind.config.js faylında düzgün yolu qeyd edin:

content hissəsində bütün komponentlərin yolunu əlavə edin:



module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


index.css və ya App.css faylının ən yuxarı hissəsinə əlavə edin:


@tailwind base;
@tailwind components;
@tailwind utilities;


npm install

npm install framer-motion


npm install react-icons

npm install sweetalert2

import Swal from 'sweetalert2'





