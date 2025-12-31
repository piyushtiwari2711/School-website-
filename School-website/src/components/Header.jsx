import React, { useState } from 'react';
import { Menu, X, GraduationCap, User, LogOut, Phone, Mail } from 'lucide-react';

const Header = ({
  currentPage,
  setCurrentPage
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center h-20 px-4 bg-blue-400">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
        <img src='https://png.pngtree.com/png-clipart/20230703/original/pngtree-school-logo-design-template-vector-png-image_9248853.png'
        className='size-20 rounded-full p-2'/>
        <div>
          <h1 className="text-[1.4rem] font-bold text-white font-serif">DAV Sreshtha Vihar</h1>
          <p className="text-xs text-white">Excellence in Education Since 1985</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-1">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-4 py-2 rounded-md text-sm  transition-all duration-200 ${currentPage === item.id
              ? 'border-b-2 border-white text-white'
              : 'hover:border-b-2 border-white hover:text-white'
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
