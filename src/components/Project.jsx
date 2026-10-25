import React from 'react';
import { ExternalLink } from 'lucide-react';

// បង្កើត Icon GitHub ឡើងវិញ (ព្រោះ lucide-react អត់មាន)
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const Project = ({ language = 'kh' }) => {
  // ទិន្នន័យគម្រោង (អ្នកអាចប្តូររូបភាព និង Link ពិតប្រាកដ)
  const projects = [
    {
      title: language === 'kh' ? 'ប្រព័ន្ធគ្រប់គ្រងការលក់' : 'E-Commerce Dashboard',
      description: language === 'kh' 
        ? 'ប្រព័ន្ធគ្រប់គ្រងការលក់ផលិតផល ដែលមានទាំងការបង្ហាញស្ថិតិ និងការគ្រប់គ្រងអ្នកប្រើប្រាស់។' 
        : 'A comprehensive dashboard for managing products, sales statistics, and user accounts.',
      tags: ['React', 'Tailwind', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'kh' ? 'គេហទំព័រកក់សណ្ឋាគារ' : 'Hotel Booking Website',
      description: language === 'kh' 
        ? 'គេហទំព័រសម្រាប់ស្វែងរក និងកក់បន្ទប់សណ្ឋាគារ ដែលមានប្រព័ន្ធទូទាត់ប្រាក់។' 
        : 'A modern platform for searching and booking hotel rooms with secure payment integration.',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: language === 'kh' ? 'កម្មវិធីសរសេរការងារ' : 'Task Management App',
      description: language === 'kh' 
        ? 'កម្មវិធីជួយរៀបចំការងារប្រចាំថ្ងៃ ដែលអាចអូសទម្លាក់ (Drag & Drop) បានយ៉ាងរលូន។' 
        : 'A productivity app to organize daily tasks with a smooth drag-and-drop interface.',
      tags: ['React', 'Firebase', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {language === 'kh' ? 'គម្រោងថ្មីៗរបស់ខ្ញុំ' : 'Featured Projects'}
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {language === 'kh' 
              ? 'ខាងក្រោមនេះជាគម្រោងមួយចំនួនដែលខ្ញុំបានបង្កើតឡើងដោយប្រើប្រាស់បច្ចេកវិទ្យាទំនើបៗ។'
              : 'A selection of projects I have built using modern web technologies.'}
          </p>
        </div>

        {/* ប្រអប់គម្រោង (Project Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group flex flex-col bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all duration-300"
            >
              {/* រូបភាពគម្រោង */}
              <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay ពេលដាក់ Mouse លើរូបភាព */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl} 
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-indigo-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-indigo-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                    aria-label="Github Repo"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* ព័ត៌មានគម្រោង */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* បច្ចេកវិទ្យាដែលប្រើ (Tags) */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700/50">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;