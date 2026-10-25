// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Herosection from './components/Herosection';
import About from './components/About';
import Skill from './components/Skill';       // បន្ថែម Import នេះ
import Project from './components/Project';   // បន្ថែម Import នេះ
import Contact from './components/Contact';   // បន្ថែម Import នេះ
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('kh'); // 'kh' ឬ 'en'

  const toggleLanguage = () => {
    setLanguage(language === 'kh' ? 'en' : 'kh');
  };

  return (
    // បន្ថែម dark:bg-gray-900 និង dark:text-gray-100 នៅទីនេះ
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${language === 'kh' ? 'font-khmer' : 'font-sans'}`}>
      
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      
      <main>
        <Herosection language={language} />
        <About language={language} />
        
        {/* បន្ថែម Component ថ្មីៗនៅទីនេះតាមលំដាប់ */}
        <Skill language={language} />
        <Project language={language} />
        <Contact language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;