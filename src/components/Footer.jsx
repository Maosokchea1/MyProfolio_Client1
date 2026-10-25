import React from 'react';

// បង្កើត Icon ទាំងអស់ដោយប្រើ SVG ដើម្បីឱ្យដូចរូបភាព
const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5.5-9c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" clipRule="evenodd" />
  </svg>
);

const Footer = ({ language = 'kh' }) => {
  return (
    // ប្រើ w-full និង bg-gray-50 ដើម្បីឱ្យវាមើលទៅធំទូលាយ និងស្អាត
    <footer className="w-full bg-[#fafafa] dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* កំណត់ max-w-7xl ដើម្បីឱ្យស៊ីគ្នានឹង Header និងបង្កើន Padding ខាងលើខាងក្រោមឱ្យធំ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          
          {/* ខាងឆ្វេង៖ ឈ្មោះ និងអក្សរពណ៌ប្រផេះ */}
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Mao Sokchea.
            </h2>
            <p className="text-[15px] md:text-base text-gray-500 dark:text-gray-400 font-medium">
              {language === 'kh' 
                ? 'អរគុណសម្រាប់ការមកកាន់គេហទំព័ររបស់ខ្ញុំ។' 
                : 'Thank you for visiting my portfolio.'}
            </p>
          </div>

          {/* ខាងស្តាំ៖ Social Icons និង Copyright */}
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            
            {/* Social Icons រាងមូល មានស៊ុម */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:border-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:border-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-[18px] h-[18px]" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:border-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* អក្សរ Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Mao Sokchea. 
              <span className="ml-1">
                {language === 'kh' ? 'រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Mao Sokchea' : 'All rights reserved by Mao Sokchea'}
              </span>
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;