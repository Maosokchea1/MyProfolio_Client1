import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ language = 'kh' }) => {
  
  // មុខងារពេលចុចប៊ូតុងផ្ញើសារ (ការពារ Page មិនឱ្យ Refresh)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(language === 'kh' ? 'សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ!' : 'Your message has been sent successfully!');
  };

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      
      {/* Background Blobs (រក្សាទុកតាមការកំណត់របស់អ្នក) */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ចំណងជើងផ្នែក (Section Header) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {language === 'kh' ? 'ទាក់ទងមកខ្ញុំ' : 'Get In Touch'}
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {language === 'kh' 
              ? 'មានគម្រោងចង់ឱ្យខ្ញុំជួយ ឬចង់សាកសួរព័ត៌មាន? សូមផ្ញើសារមកខ្ញុំតាមរយៈទម្រង់បែបបទខាងក្រោម។'
              : 'Have a project in mind or just want to say hi? Feel free to reach out through the form below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* ជួរខាងឆ្វេង៖ ព័ត៌មានទំនាក់ទំនង (Contact Info) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {/* អ៊ីមែល */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {language === 'kh' ? 'អ៊ីមែល' : 'Email'}
                  </h4>
                  <a href="mailto:hello@example.com" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mt-1 block">
                    hello@example.com
                  </a>
                </div>
              </div>

              {/* លេខទូរស័ព្ទ */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {language === 'kh' ? 'លេខទូរស័ព្ទ' : 'Phone'}
                  </h4>
                  <a href="tel:+85512345678" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mt-1 block">
                    +855 12 345 678
                  </a>
                </div>
              </div>

              {/* ទីតាំង */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {language === 'kh' ? 'ទីតាំង' : 'Location'}
                  </h4>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ជួរខាងស្តាំ៖ ទម្រង់បែបបទផ្ញើសារ (Contact Form) */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* ឈ្មោះ */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'kh' ? 'ឈ្មោះរបស់អ្នក' : 'Your Name'}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors outline-none"
                    placeholder={language === 'kh' ? 'បញ្ចូលឈ្មោះ...' : 'John Doe'}
                  />
                </div>
                
                {/* អ៊ីមែល */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {language === 'kh' ? 'អ៊ីមែលរបស់អ្នក' : 'Your Email'}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors outline-none"
                    placeholder={language === 'kh' ? 'បញ្ចូលអ៊ីមែល...' : 'john@example.com'}
                  />
                </div>
              </div>

              {/* ចំណងជើងសារ */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language === 'kh' ? 'ចំណងជើង' : 'Subject'}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors outline-none"
                  placeholder={language === 'kh' ? 'ចង់សួរអំពីអ្វី?' : 'How can I help you?'}
                />
              </div>

              {/* សារ */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language === 'kh' ? 'សាររបស់អ្នក' : 'Message'}
                </label>
                <textarea 
                  id="message" 
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 text-gray-900 dark:text-white transition-colors outline-none resize-none"
                  placeholder={language === 'kh' ? 'សរសេរសាររបស់អ្នកនៅទីនេះ...' : 'Write your message here...'}
                ></textarea>
              </div>

              {/* ប៊ូតុងផ្ញើ */}
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-600/30 dark:shadow-indigo-500/20"
              >
                <Send className="w-5 h-5" />
                {language === 'kh' ? 'ផ្ញើសារ' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;