import React from 'react';

const Herosection = ({ language = 'kh' }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      
      {/* ផ្ទៃខាងក្រោយស្រាលៗ (Background Blob) សម្រាប់ភាព Professional */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* ជួរខាងឆ្វេង៖ អក្សរ និងប៊ូតុង */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm md:text-base">
              {language === 'kh' ? 'សូមស្វាគមន៍មកកាន់ Portfolio របស់ខ្ញុំ' : 'Welcome to my portfolio'}
            </h2>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight ${language === 'kh' ? 'leading-[1.5]' : 'leading-tight'}`}>
              {language === 'kh' ? (
                <>សួស្តី! ខ្ញុំបាទឈ្មោះ <span className="text-indigo-600 dark:text-indigo-400">ម៉ៅ សុជា</span></>
              ) : (
                <>Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Mao Sokchea</span></>
              )}
            </h1>
            <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 ${language === 'kh' ? 'leading-loose' : 'leading-relaxed'}`}>
              {language === 'kh'
                ? 'ខ្ញុំជា Web Developer ដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតគេហទំព័រ និង Web Application ទំនើបៗ ងាយស្រួលប្រើ និងមានប្រសិទ្ធភាពខ្ពស់។'
                : 'I am a passionate Web Developer dedicated to building modern, user-friendly, and high-performance websites and web applications.'}
            </p>
          </div>
          
          {/* ប៊ូតុង (Buttons) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/30 dark:shadow-indigo-500/20 text-center"
            >
              {language === 'kh' ? 'មើលគម្រោងរបស់ខ្ញុំ' : 'View My Projects'}
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl font-medium transition-all text-center"
            >
              {language === 'kh' ? 'ទាក់ទងមកខ្ញុំ' : 'Contact Me'}
            </a>
          </div>
        </div>

        {/* ជួរខាងស្តាំ៖ រូបភាព */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          {/* ស៊ុមព័ទ្ធជុំវិញរូបភាព */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2rem] transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
          
          {/* រូបភាពពិត */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Mao Sokchea Profile"
            className="relative z-10 w-full h-auto aspect-square object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Herosection;