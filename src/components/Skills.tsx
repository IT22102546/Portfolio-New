import { useState } from "react";

export default function Skills() {
  const technologies = [
    { name: 'HTML5', url: 'https://www.w3.org/html/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', category: 'frontend' },
    { name: 'CSS3', url: 'https://www.w3schools.com/css/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', category: 'frontend' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'React', url: 'https://reactjs.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', category: 'frontend' },
    { name: 'React Native', url: 'https://reactnative.dev/', icon: 'https://reactnative.dev/img/header_logo.svg', category: 'mobile' },
    { name: 'Next.js', url: 'https://nextjs.org/', icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', category: 'frontend' },
    { name: 'Node.js', url: 'https://nodejs.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', category: 'backend' },
    { name: 'Express', url: 'https://expressjs.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', category: 'backend' },
    { name: 'Redux', url: 'https://redux.js.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg', category: 'frontend' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', category: 'frontend' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg', category: 'frontend' },
    { name: 'Java', url: 'https://www.java.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', category: 'backend' },
    { name: 'Python', url: 'https://www.python.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', category: 'backend' },
    { name: 'PHP', url: 'https://www.php.net', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', category: 'backend' },
    { name: 'C', url: 'https://www.cprogramming.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', category: 'backend' },
    { name: 'C++', url: 'https://www.w3schools.com/cpp/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', category: 'backend' },
    { name: 'C#', url: 'https://www.w3schools.com/cs/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', category: 'backend' },
    { name: 'Kotlin', url: 'https://kotlinlang.org', icon: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg', category: 'mobile' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', category: 'database' },
    { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg', category: 'database' },
    { name: 'MS SQL Server', url: 'https://www.microsoft.com/en-us/sql-server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg', category: 'database' },
    { name: 'Firebase', url: 'https://firebase.google.com/', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', category: 'backend' },
    { name: 'Git', url: 'https://git-scm.com/', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', category: 'tools' },
    { name: 'Linux', url: 'https://www.linux.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', category: 'tools' },
    { name: 'Android', url: 'https://developer.android.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg', category: 'mobile' },
    { name: 'Arduino', url: 'https://www.arduino.cc/', icon: 'https://cdn.worldvectorlogo.com/logos/arduino-1.svg', category: 'iot' },
    { name: 'Docker', url: 'https://www.docker.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg', category: 'devops' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/', icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', category: 'devops' },
    { name: 'Figma', url: 'https://www.figma.com/', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', category: 'design' },
    { name: 'Postman', url: 'https://postman.com', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', category: 'tools' },
    { name: 'MATLAB', url: 'https://www.mathworks.com/', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png', category: 'data' }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies', color: 'from-blue-500 to-cyan-500' },
    { id: 'frontend', name: 'Frontend', color: 'from-purple-500 to-pink-500' },
    { id: 'backend', name: 'Backend', color: 'from-green-500 to-emerald-500' },
    { id: 'mobile', name: 'Mobile', color: 'from-orange-500 to-red-500' },
    { id: 'database', name: 'Database', color: 'from-yellow-500 to-amber-500' },
    { id: 'devops', name: 'DevOps', color: 'from-indigo-500 to-blue-500' },
    { id: 'tools', name: 'Tools', color: 'from-gray-500 to-slate-500' },
    { id: 'design', name: 'Design', color: 'from-pink-500 to-rose-500' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechnologies = technologies.filter(tech => 
    activeCategory === 'all' || tech.category === activeCategory
  );

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-blue-500 to-cyan-500';
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden min-h-screen">
      {/* Advanced Background Elements */}
      <div className="floating-orb orb-5"></div>
      <div className="quantum-dots"></div>
      <div className="neural-network"></div>
      
      {/* Interactive Particles */}
      <div className="interactive-particles"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 gradient-text animate-gradient-shift relative">
              Tech Stack
            </h2>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full animate-expand mb-6"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Exploring the digital universe with a comprehensive arsenal of modern technologies and tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/60 backdrop-blur-sm'
              } border border-slate-600/30 hover:border-slate-500/50`}
            >
              {category.name}
              {activeCategory === category.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-current rounded-full animate-pulse-glow"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid with Enhanced Effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
          {filteredTechnologies.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              className="advanced-tech-card group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl p-4 rounded-2xl border border-slate-600/30 hover:border-transparent transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 flex flex-col items-center justify-center gap-3 overflow-hidden"
              style={{ 
                animationDelay: `${index * 30}ms`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tech.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[2px] rounded-2xl bg-slate-900"></div>
              </div>

              {/* Tech Icon with Enhanced Effects */}
              <div className="relative transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-10">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-0 group-hover:scale-100"></div>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain filter group-hover:brightness-125 group-hover:contrast-125 transition-all duration-500 relative z-10"
                />
              </div>

              {/* Tech Name with Category Badge */}
              <div className="relative z-10 text-center">
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300 block">
                  {tech.name}
                </span>
                <div className={`text-[10px] px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(tech.category)} bg-opacity-20 text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {tech.category}
                </div>
              </div>

              {/* Connection Lines on Hover */}
              {hoveredTech === tech.name && (
                <div className="absolute inset-0 connection-lines">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="connection-line"
                      style={{
                        top: `${25 * (i + 1)}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-card-advanced bg-gradient-to-br from-slate-900/80 to-blue-900/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{technologies.length}+</div>
            <div className="text-gray-400">Technologies Mastered</div>
          </div>
          <div className="stat-card-advanced bg-gradient-to-br from-slate-900/80 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">{categories.length - 1}</div>
            <div className="text-gray-400">Development Domains</div>
          </div>
          <div className="stat-card-advanced bg-gradient-to-br from-slate-900/80 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>

        {/* Hosting Platforms */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-slate-900/80 backdrop-blur-xl px-8 py-4 rounded-2xl border border-slate-600/30 animate-pulse-glow">
            <span className="text-gray-300 font-semibold">Deployed on</span>
            <div className="flex items-center gap-4">
              {['Hostinger', 'Vercel', 'Netlify', 'AWS'].map((platform) => (
                <span key={platform} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400 border border-cyan-500/30">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}