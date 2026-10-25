import React from 'react';
import { CheckCircle2, Code2, Layout, Server } from 'lucide-react';

const About = ({ language = 'kh' }) => {
  // ទិន្នន័យស្ថិតិ (Stats)
  const stats = [
    { 
      value: '2+', 
      label: language === 'kh' ? 'ឆ្នាំបទពិសោធន៍' : 'Years Experience' 
    },
    { 
      value: '20+', 
      label: language === 'kh' ? 'គម្រោងបានបញ្ចប់' : 'Projects Completed' 
    },
    { 
      value: '15+', 
      label: language === 'kh' ? 'អតិថិជនពេញចិត្ត' : 'Happy Clients' 
    },
    { 
      value: '100%', 
      label: language === 'kh' ? 'គុណភាពការងារ' : 'Dedication' 
    },
  ];

  // ចំណុចខ្លាំង (Core Skills/Values)
  const coreSkills = [
    {
      icon: Code2,
      title: language === 'kh' ? 'កូដស្អាត និងមានរបៀបរៀបរយ' : 'Clean & Maintainable Code',
      desc: language === 'kh' ? 'សរសេរកូដដែលងាយស្រួលអាន និងថែទាំ។' : 'Writing readable and easy-to-maintain code.'
    },
    {
      icon: Layout,
      title: language === 'kh' ? 'រចនាបែប Responsive' : 'Responsive Design',
      desc: language === 'kh' ? 'បង្ហាញបានយ៉ាងល្អគ្រប់ទំហំអេក្រង់។' : 'Looks great on every screen size.'
    },
    {
      icon: Server,
      title: language === 'kh' ? 'មានប្រសិទ្ធភាពខ្ពស់' : 'High Performance',
      desc: language === 'kh' ? 'គេហទំព័រដំណើរការលឿន និងរលូន។' : 'Fast and smooth user experiences.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ជួរខាងឆ្វេង៖ អក្សរពណ៌នា និង ជំនាញ */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                {language === 'kh' ? 'អំពីខ្ញុំ' : 'About Me'}
              </h2>
              
              {/* បន្ទាត់ពណ៌ Primary តូចមួយសម្រាប់ការតុបតែង */}
              <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
              
              <p className={`text-lg text-gray-600 dark:text-gray-300 ${language === 'kh' ? 'leading-[1.8]' : 'leading-relaxed'}`}>
                {language === 'kh'
                  ? 'ខ្ញុំជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ (Web Developer) ដែលមានចំណង់ចំណូលចិត្តក្នុងការសរសេរកូដ និងបង្កើតដំណោះស្រាយឌីជីថលល្អៗ។ ខ្ញុំតែងតែខិតខំប្រឹងប្រែងដើម្បីបង្កើតគេហទំព័រដែលមានទាំងរូបរាងស្អាត និងដំណើរការបានយ៉ាងលឿន។'
                  : 'I am a passionate Web Developer focused on building functional, elegant, and modern digital experiences. I strive to create websites that are not only visually appealing but also highly performant and user-centric.'}
              </p>
            </div>

            {/* បញ្ជីជំនាញ (List of core values) */}
            <div className="space-y-4 pt-2">
              {coreSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ជួរខាងស្តាំ៖ ប្រអប់ស្ថិតិ (Stats Cards) */}
          <div className="relative">
            {/* ផ្ទៃខាងក្រោយស្រាលៗនៅពីក្រោយប្រអប់ */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-3xl transform rotate-2 scale-105"></div>
            
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6 p-6 sm:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;