import React, { useState, useEffect } from 'react';
import { Home, User, Code2, Briefcase, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { English } from '../translate/English';
import { Khmer } from '../translate/Khmer';

const Header = ({ language = 'kh', toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // ១. បន្ថែម State សម្រាប់តាមដានផ្នែកដែលកំពុងសកម្ម
  const [activeSection, setActiveSection] = useState('home');

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // ២. បន្ថែម useEffect សម្រាប់តាមដានពេល Scroll (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // ប្រសិនបើផ្នែកនោះនៅជិតកំពូលអេក្រង់ (ក្រោម Header 80px)
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = language === 'kh' ? Khmer : English;

  const navLinks = [
    { key: 'home', href: '#home', icon: Home },
    { key: 'about', href: '#about', icon: User },
    { key: 'skills', href: '#skills', icon: Code2 },
    { key: 'projects', href: '#projects', icon: Briefcase },
    { key: 'contact', href: '#contact', icon: Mail },
  ];

  const flagUrl = language === 'kh' 
    ? 'https://flagcdn.com/w40/kh.png'
    : 'https://flagcdn.com/w40/gb.png';

  // ៣. បង្កើត Function សម្រាប់កំណត់ Class ពណ៌តាមស្ថានភាព
  const getNavLinkClass = (key) => {
    const isActive = activeSection === key;
    return `flex items-center gap-2 px-3.5 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${
      isActive 
        ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/30' // ពណ៌ Primary ពេលសកម្ម
        : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-2 group"
          >
            <span className="p-1.5 rounded-lg bg-indigo-600 text-white group-hover:bg-indigo-700 transition-colors">
              <Code2 className="w-5 h-5" />
            </span>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setActiveSection(link.key)} // ពេលចុច កំណត់ឱ្យជាប់ពណ៌
                  className={getNavLinkClass(link.key)} // ហៅ Function មកប្រើ
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {t.nav[link.key]} 
                </a>
              );
            })}
          </nav>

          {/* Right Side: Theme & Language Toggles */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-[20px] h-[20px]" /> : <Moon className="w-[20px] h-[20px]" />}
            </button>

            <button
              onClick={toggleLanguage} 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
              aria-label="Change language"
            >
              <img 
                src={flagUrl} 
                alt="Flag" 
                className="w-[18px] h-[18px] rounded-full object-cover shadow-sm"
              />
              <span className="text-[15px] font-medium text-gray-700 dark:text-gray-200">
                {language === 'kh' ? 'ខ្មែរ' : 'English'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pt-3 pb-5 space-y-1 shadow-lg absolute w-full transition-all">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.key;
            return (
              <a
                key={link.key}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.key);
                }}
                className={`flex items-center gap-3 px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' // ពណ៌ Primary ពេលសកម្ម (Mobile)
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'}`} />
                {t.nav[link.key]}
              </a>
            );
          })}
          
          <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex-1 flex justify-center items-center py-2 text-gray-600 dark:text-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex-1 flex justify-center items-center gap-2 py-2 text-gray-600 dark:text-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <img 
                src={flagUrl} 
                alt="Flag" 
                className="w-[18px] h-[18px] rounded-full object-cover"
              />
              <span className="text-[15px] font-medium">
                {language === 'kh' ? 'ខ្មែរ' : 'English'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;