import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Chambres", href: "#rooms" },
  { label: "Équipements", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

import logoImg from "@/assets/hero-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <img 
            src={logoImg} 
            alt="Domaine de la Palmeraie Logo" 
            className="h-10 w-auto object-contain"
          />
          <span className="text-lg font-heading font-bold text-primary-foreground tracking-wide">
            La Palmeraie
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm uppercase tracking-wider font-body">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md px-4 pb-6 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-primary-foreground/80 hover:text-primary-foreground text-sm uppercase tracking-wider font-body">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
