import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaGithub, FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2'

function Home() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e824103a-756a-41da-a374-713d6f562519");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Xos gorduk",
        text: "Mesajiniz ugurla gonderildi!",
        icon: "success"
      });
    }
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:xeyyamelizade5@gmail.com?subject=Əlaqə Formu&body=Ad: ${formData.name}%0ASoyad: ${formData.surname}%0AEmail: ${formData.email}%0ANömrə: ${formData.phone}%0AKoment: ${formData.comment}`;
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-y-auto bg-black" style={{ backgroundImage: "url('/desktop/bu.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <header className="w-full bg-gradient-to-r from-gray-900 to-black py-6 fixed top-0 shadow-2xl z-50 flex justify-between items-center px-10">
        <div className="flex items-center text-2xl text-white">
          <FaUserCircle className="mr-2 text-green-400" />
          <span>Portfolio</span>
        </div>
        <nav className="flex space-x-10">
          {[{ id: "#home", title: "Əsas" }, { id: "#projects", title: "Layihələr" }, { id: "#experience", title: "Təcrübə" }, { id: "#skills", title: "Bacarıqlar" }, { id: "#about", title: "Haqqında" }, { id: "#contact", title: "Əlaqə" }].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-lg text-white hover:text-green-400 transition-all cursor-pointer px-4 py-2 rounded-lg bg-transparent hover:bg-green-700"
              whileHover={{ scale: 1.3 }}
            >
              {item.title}
            </motion.button>
          ))}
        </nav>
      </header>

      <a
        href="https://wa.me/994514564317"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 left-10 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-700 transition-all"
      >
        <FaWhatsapp size={30} />
      </a>

      {[{ id: "home", title: "Əsas" }, { id: "projects", title: "Layihələr" }, { id: "experience", title: "Təcrübə" }, { id: "skills", title: "Bacarıqlar" }, { id: "about", title: "Haqqında" }, { id: "contact", title: "Əlaqə" }].map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen w-full flex flex-col items-center justify-center p-10 bg-opacity-80 overflow-y-auto"
        >
          <motion.h2 className="text-6xl mb-10">{section.title}</motion.h2>
          {section.id === "contact" && (
            <>
              <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <input type="text" name="name" placeholder="Ad" onChange={handleChange} className="p-3 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="text" name="surname" placeholder="Soyad" onChange={handleChange} className="p-3 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-3 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <input type="tel" name="phone" placeholder="Nömrə" onChange={handleChange} className="p-3 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                <textarea name="comment" placeholder="Komment" onChange={handleChange} className="col-span-2 p-3 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full" required></textarea>
                <button type="submit" onSubmit={onSubmit} className="col-span-2 p-3 bg-green-500 hover:bg-green-700 rounded-lg shadow-lg transition-all">Göndər</button>
              </form>
              <div className="flex space-x-4 mt-10">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-all duration-1500">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-all duration-1500">
                  <FaFacebook />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-all duration-1500">
                  <FaTiktok />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-400 transition-all duration-1500">
                  <FaGithub />
                </a>
              </div>
            </>
          )}
        </section>
      ))}

      <footer className="w-full text-center p-16 bg-gray-900 text-white mt-10">
        © 2025 Xəyyam Əlizadə. Bütün hüquqlar qorunur.
        <div className="mt-4">
          <p>Telefon: 0702564317, 0514564317</p>
          <p>Email: xeyyamelizade5@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
