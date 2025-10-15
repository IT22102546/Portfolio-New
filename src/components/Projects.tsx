import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'aMusic-Bible',
      description: 'A full-featured Bible song include application with AI chatbot integrated from both English and tamil. Capable of bible reading option with voice assist and song search by lyrics, title, and more. Built with React, Node.js, MongoDB, TensorFlow, Flask, and Stripe for payments with Admin Dashboard.Deployed on Hostinger.',
      image: '/assets/music.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind','TensorFlow','Flask','Stripe','Hostinger'],
      github: 'https://github.com/IT22102546/BibHost',
      live: 'https://amusicbible.com'
    },
    {
      title: 'Feraix-Global',
      description: 'Web application for Feraix Global, a leading provider of innovative tech solutions. Features include service listings, client testimonials, and a blog section. Built with React,  Tailwind CSS, and Chart.js for data visualization. Deployed on Hostinger with Admin Dashboard.',
      image: '/assets/Feraix.png',
      tags: ['React', 'Node.js', 'MongoDB','Tailwind CSS','Chart.js','Hostinger'],
      github: 'https://github.com/IT22102546/FeraixHost',
      live: 'https://feraix.com'
    },
    {
      title: 'Viwahaa Matrimony',
      description: 'Couple matching and matrimonial service with advanced search filters, profile management and include packagewise custermize Feature. Built with React, Nodejs , SQL with optimization, Tailwind CSS. Deployed on Hostinger Hosting with Admin Dashboard.',
      image: '/assets/VivM.jpg',
      tags: ['React', 'Node.js', 'SQL','Tailwind','Hostinger'],
      github: 'https://github.com',
      live: 'https://viwahaa.com'
    },
    {
      title: 'Aloy Restaurant',
      description: 'Website for Aloy Restaurant, featuring an elegant design, menu showcase,  and customer reviews. Built with Nextjs, TypeScript , Tailwind CSS, Sanity.io. Deployed on Vercel for optimal performance.',
      image: '/assets/aloy.png',
      tags: ['Next.js','TypeScript', 'Tailwind CSS', 'Sanity.io', 'Vercel'],
      github: 'https://github.com/IT22102546/Alloy',
      live: 'https://alloy-gamma-ashy.vercel.app/'
    },
    {
      title: 'OB Taste',
      description: 'Cake Ordering and delivering application with user and admin and rider pannel Built with React , Node.js, MongoDB, Tailwind CSS, and integrated with Stripe for secure payments include docker for containerization kubernetes for orchestration.Deployed on Hostinger.',
      image: '/assets/ob.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind','Stripe','Docker','Kubernetes','Hostinger'],
      github: 'https://github.com/IT22102546/DS-Assignment',
      live: 'https://obtaste.com/'
    },
    {
      title: 'Eco Waste',
      description: 'Waste management system that uses Qr code to identify and sort waste. Features include real-time tracking and waste analytics dashboard for monitoring waste collection and disposal. Built with React, nodejs, MongoDB, and google api',
      image: '/assets/eco.jpg',
      tags: ['React', 'Node.js', 'MongoDB','Google API'],
      github: 'https://github.com/IT22102546/CSSE_Project',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="floating-orb orb-6"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-bottom">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-expand"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Showcasing some of my best work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group relative bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs text-white font-semibold">Featured</span>
                  </div>
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full hover:bg-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
