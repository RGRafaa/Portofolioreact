import React from 'react';

export default function TextCard({ title, content, list }) {
  return (
    <div className="w-full p-6 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg hover:bg-gray-700/60 hover:border-blue-500/50 transition-all duration-300">
      
      <h5 className="mb-3 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      
      {/* Bagian Teks Biasa */}
      {content && (
        <p className="font-normal text-gray-300 leading-relaxed">
          {content}
        </p>
      )}
      
      {/* Bagian List / Daftar */}
      {list && (
        <ul className="space-y-2 text-gray-300 mt-4">
          {list.map((item, index) => (
            <li key={index} className="flex items-start">
              {/* Ikon Checklist */}
              <svg 
                className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}