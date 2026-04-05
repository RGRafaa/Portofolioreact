import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const activeClass = "text-blue-500 font-bold";
  const inactiveClass = "text-gray-300 hover:text-blue-400";

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Keahlian', path: '/keahlian' },
    { name: 'Sertifikat', path: '/sertifikat' },
  ];

  return (
    <nav className="bg-gray-900/50 border-b border-gray-700 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-screen-xl flex justify-center mx-auto p-4">
        <ul className="flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? activeClass : inactiveClass}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}