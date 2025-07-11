import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/ThemeProvider"; // ← custom theme context

const navItems = [
  { name: "About",      href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects",   href: "/#projects" },
  { name: "Education",  href: "/#education" },
  { name: "Skills",     href: "/#skills" },
  { name: "Contact",    href: "/#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-30 px-6 md:px-12 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm py-3 shadow-sm dark:bg-zinc-900/90" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" aria-label="Home">
          <img
            src="/logo.png"
            alt="M Shaafi Jahangir logo"
            className="h-8 w-auto sm:h-5"
          />
        </a>

        {/* Desktop nav + toggle */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ name, href }) => (
            <a key={name} href={href} className="nav-link rounded-full">
              {name}
            </a>
          ))}

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2 relative z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition flex items-center justify-center"
          >
            {isOpen ? (
              <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-300" />
            )}
          </button>
        </div>


      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[hsl(var(--background))] dark:bg-[hsl(var(--background))] h-screen w-screen",
          "overflow-y-auto flex flex-col pt-24 px-6 md:hidden",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            onClick={toggleMenu}
            className="py-4 text-lg font-medium border-b border-gray-100 dark:border-zinc-700"
          >
            {name}
          </a>
        ))}
        
      </div>
    </nav>
  );
};

export default Navbar;
