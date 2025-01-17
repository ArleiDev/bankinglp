import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from '../../public/imgs/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-14 bg-zinc-950 fixed z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-14" src={Logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-6 text-green-400">
              <li className="hover:scale-110 transition-all duration-200 cursor-pointer">Início</li>
              <li className="hover:scale-110 transition-all duration-200 cursor-pointer">Produtos</li>
              <li className="hover:scale-110 transition-all duration-200 cursor-pointer">Cartões</li>
              <li className="hover:scale-110 transition-all duration-200 cursor-pointer">Investimentos</li>
              <li className="hover:scale-110 transition-all duration-200 cursor-pointer">Ajuda</li>
            </ul>
          </div>

          {/* Get App Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-zinc-950 w-32 text-green-400 border-green-500 border hover:drop-shadow-xl hover:transition-all hover:duration-700 hover:shadow-green-500"
            >
              Get App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-green-400"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-950 border border-green-500 rounded-md mt-2">
              <ul className="space-y-4 text-green-400">
                <li className="hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2">
                  Início
                </li>
                <li className="hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2">
                  Produtos
                </li>
                <li className="hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2">
                  Cartões
                </li>
                <li className="hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2">
                  Investimentos
                </li>
                <li className="hover:scale-105 transition-all duration-200 cursor-pointer px-3 py-2">
                  Ajuda
                </li>
              </ul>
              <div className="pt-4 pb-2">
                <Button 
                  className="w-full bg-zinc-950 text-green-400 border-green-500 border hover:drop-shadow-xl hover:transition-all hover:duration-700 hover:shadow-green-500"
                >
                  Get App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;