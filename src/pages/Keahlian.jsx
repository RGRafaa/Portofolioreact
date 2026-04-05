import React from 'react';
import TextCard from '../components/TextCard';

export default function Keahlian() {
  const skills = [
    'PHP (Laravel)',
    'JavaScript (React.js, Next.js, Node.js)',
    'Python (Flask, Data Analysis, and AI)',
  ];

  return (
    <div className="text-left animate-fade-in space-y-8">
      <h1 className="text-3xl font-extrabold text-white md:text-4xl">
        Pendidikan & <span className="text-blue-500">Keahlian</span>
      </h1>
      
      {/* Bagian Pendidikan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextCard title="🏫 SD" content="SDIT Al - Fatih [2016 - 2022]" />
        <TextCard title="🏫 SMP" content="SMPIT Al - Fatih [2022 - 2025]" />
        <TextCard title="🏫 SMK" content="SMK Wikrama Bogor - [2025 - 2027]" />
      </div>

      {/* Bagian Keahlian */}
      <TextCard title="💻 Tech Stack" list={skills} />

      {/* Bagian Fun Fact */}
      <TextCard 
        title="💡 Fun Fact!" 
        content="Saya sedang mempelajari tentang AI seperti machine learning, deep learning. Saya juga sedang menempuh course untuk menjadi AI Engineer dan Data Analyst!" 
      />
    </div>
  );
}