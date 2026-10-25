import React from 'react';
import { Layout, Server, Database, Wrench, Terminal } from 'lucide-react';

const Skill = ({ language = 'kh' }) => {
  // ទិន្នន័យជំនាញ បែងចែកតាមប្រភេទ
  const skillCategories = [
    {
      title: language === 'kh' ? 'ផ្នែកខាងមុខ (Frontend)' : 'Frontend Development',
      icon: Layout,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: language === 'kh' ? 'ផ្នែកខាងក្រោយ (Backend)' : 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST API'],
    },
    {
      title: language === 'kh' ? 'ទិន្នន័យ (Database)' : 'Database',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: language === 'kh' ? 'ឧបករណ៍ផ្សេងៗ' : 'Tools & Others',
      icon: Wrench,
      skills: ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Docker'],
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {language === 'kh' ? 'ជំនាញ និងបច្ចេកវិទ្យា' : 'Skills & Technologies'}
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {language === 'kh' 
              ? 'ខាងក្រោមនេះជាបច្ចេកវិទ្យា និងឧបករណ៍ដែលខ្ញុំប្រើប្រាស់ជាប្រចាំដើម្បីបង្កើតគេហទំព័រ។'
              : 'Here are the technologies and tools I use regularly to build modern web applications.'}
          </p>
        </div>

        {/* ប្រអប់ជំនាញ (Skills Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-300"
              >
                {/* Icon និង ចំណងជើង */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* បញ្ជីឈ្មោះបច្ចេកវិទ្យា (Tags) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skill;