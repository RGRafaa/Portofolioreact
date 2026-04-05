import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Cek apakah sekarang lagi di halaman Home (/)
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white font-sans">
      
      {/* Navbar sekarang butuh navigasi router, bukan setPage lagi */}
      <Navbar />
      
      <main className="max-w-screen-xl mx-auto px-4 py-10 md:py-16">
        
        {/* Tampilkan Home hanya jika path-nya "/" */}
        {isHome && (
          <div className="text-center mt-10 md:mt-20 animate-fade-in">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Halo! Saya <span className="text-blue-400">Raditya</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
              Halo! Selamat datang di portofolio saya. Di sini, Anda bisa melihat berbagai keahlian saya selama saya menjadi seorang siswa di SMK Wikrama Bogor, disini saya juga menampilkan beberapa tentang diri saya di tombol di bawah ini. 
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <button onClick={() => navigate('/keahlian')} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800">
                Lihat Keahlian
              </button>
              <button onClick={() => navigate('/sertifikat')} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-300 rounded-lg border border-gray-600 hover:bg-gray-700">
                Lihat Sertifikat
              </button>
            </div>
          </div>
        )}

        {/* OUTLET: Ini tempat munculnya isi Keahlian / Sertifikat */}
        <Outlet />
        
      </main>
    </div>
  );
}