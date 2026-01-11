import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Navigation = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Home className="text-blue-600" size={24} />
            <span className="text-xl font-bold text-gray-800">Course Portal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentRoute === 'home' 
                  ? 'bg-blue-100 text-blue-700 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => onNavigate('plan')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentRoute === 'plan' 
                  ? 'bg-blue-100 text-blue-700 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Plans & Pricing
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentRoute === 'about' 
                  ? 'bg-blue-100 text-blue-700 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              All Courses
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Plans & Pricing
            </button>
            <button
              onClick={() => {
                onNavigate('plan');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              About
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;