
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education', href: '/#education' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-30 transition-all duration-300 px-6 md:px-12',
        scrolled
          ? 'bg-white/90 backdrop-blur-sm py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="block">
          <img
            src="/logo.png"
            alt="M Shaafi Jahangir logo"
            className="h-8 w-auto sm:h-5"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link rounded-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 flex flex-col bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
