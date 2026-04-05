import React from 'react';
import ImageCard from '../components/ImageCard';

// Import Gambar Sertifikat
import imgHtml from '../assets/HTML.png';
import imgJs from '../assets/JS.png';
import imgPython from '../assets/Python.png';
import imgMl from '../assets/ML.png';
import imgAi from '../assets/AI.png';

// Import Gambar Proyek (Sesuaikan dengan file di folder assets lu)
import imgHero from '../assets/hero.png'; 

export default function Sertifikat() {
  const dataSertifikat = [
    { id: 1, title: 'Sertifikat Dasar Web (HTML)', img: imgHtml },
    { id: 2, title: 'Sertifikat JavaScript Dasar', img: imgJs },
    { id: 3, title: 'Sertifikat Pemrograman Python', img: imgPython },
    { id: 4, title: 'Sertifikat Machine Learning Pemula', img: imgMl },
    { id: 5, title: 'Sertifikat Pembelajaran AI', img: imgAi },
  ];

  const dataProyek = [
    { id: 1, title: 'Project Landing Page Portofolio', img: imgHero },
    { id: 2, title: 'Aplikasi Kasir Sederhana', img: 'https://via.placeholder.com/400x300?text=Project+2' },
    { id: 3, title: 'Website Statis Sekolah', img: 'https://via.placeholder.com/400x300?text=Project+3' },
  ];

  return (
    <div className="animate-fade-in space-y-16">
      
      {/* --- BAGIAN SERTIFIKAT --- */}
      <section>
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl text-center">
          Sertifikat
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 text-center sm:px-16 xl:px-48">
          Berikut adalah sertifikat kompetensi yang telah saya raih sejauh ini.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {dataSertifikat.map(cert => (
            <ImageCard key={cert.id} title={cert.title} imageUrl={cert.img} />
          ))}
        </div>
      </section>
      <hr className="border-gray-700 mx-auto w-1/2" />
    </div>
  );
}