import React from 'react';

export default function ImageCard({ title, imageUrl }) {
  return (
    <div className="w-full max-w-sm bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
      
      {/* Bagian Gambar */}
      {/* Kasih background sedikit putih transparan buat jaga-jaga kalau gambarnya transparan */}
      <div className="overflow-hidden bg-white/5">
        <img 
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" 
          src={imageUrl} 
          alt={title} 
        />
      </div>
      
      {/* Bagian Judul */}
      <div className="p-5 flex-grow flex items-center justify-center">
        <h5 className="text-xl font-bold tracking-tight text-white text-center">
          {title}
        </h5>
      </div>
      
    </div>
  );
}