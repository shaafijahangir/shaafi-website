/**  src/components/Navbar.tsx
 *   © 2025 M Shaafi Jahangir
 *
 *   – Fixed-position top bar that turns solid after 50 px scroll
 *   – Mobile: hamburger spins into X, full-screen slide-in menu
 *   – Background scrolling disabled while drawer is open
 */
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const navItems = [
  { name: "About",      href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects",   href: "/#projects" },
  { name: "Education",  href: "/#education" },
  { name: "Skills",     href: "/#skills" },
  { name: "Contact",    href: "/#contact" },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENT                                  */
/* -------------------------------------------------------------------------- */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* sticky-bar shadow after 50 px scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();                   // initialise state
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll while drawer is open */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((open) => !open);

  /* -------------------------------- render -------------------------------- */

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-30 px-6 md:px-12 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm py-3 shadow-sm"
                 : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* --- Brand mark ---------------------------------------------------- */}
        <a href="/" aria-label="Home">
          <img
            src="/logo.png"
            alt="M Shaafi Jahangir logo"
            className="h-8 w-auto sm:h-5"
          />
        </a>

        {/* --- Desktop links ------------------------------------------------- */}
        <div className="hidden md:flex gap-1">
          {navItems.map(({ name, href }) => (
            <a key={name} href={href} className="nav-link rounded-full">
              {name}
            </a>
          ))}
        </div>

        {/* --- Mobile hamburger / X ---------------------------------------- */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={cn(
            "md:hidden relative z-50 transition-colors duration-200",
            isOpen ? "text-zinc-900" : "text-primary"
          )}
        >
          {/* spin animation: rotate-90 when open */}
          <span
            className={cn(
              "inline-block transition-transform duration-300",
              isOpen ? "rotate-90" : "rotate-0"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      {/* --- Mobile drawer -------------------------------------------------- */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white h-screen w-screen overflow-y-auto",
          "flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            onClick={toggleMenu}
            className="py-4 text-lg font-medium border-b border-gray-100"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
