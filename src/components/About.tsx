import { Code, Palette, Zap, Award, Sparkles, Cpu, Cloud, Database, Server, Smartphone, Globe, Layers, Brain, GitBranch, Terminal } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '1.5+', label: 'Years Experience', icon: Award },
    { value: '40+', label: 'Projects Completed', icon: Code },
    { value: '20+', label: 'Happy Clients', icon: Palette },
    { value: '25+', label: 'Technologies', icon: Zap }
  ];

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web development with modern frameworks and scalable architectures',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['React.js', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      gradient: 'from-purple-500 to-pink-500',
      features: ['React Native', 'Flutter', 'Mobile UI/UX', 'App Store Deployment']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Intelligent solutions with Python, TensorFlow, and data science',
      gradient: 'from-orange-500 to-red-500',
      features: ['Python', 'TensorFlow', 'Data Analysis', 'AI Models']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Infrastructure, deployment, and cloud solutions',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Docker', 'CI/CD', 'Cloud Platforms', 'Database Management']
    }
  ];

  const techStack = [
    // Frontend & Mobile
    { name: 'React.js', level: 90, icon: Code, category: 'frontend' },
    { name: 'React Native', level: 85, icon: Smartphone, category: 'mobile' },
    { name: 'Flutter', level: 80, icon: Layers, category: 'mobile' },
    { name: 'Next.js', level: 82, icon: Globe, category: 'frontend' },
    
    // Backend & Databases
    { name: 'Node.js', level: 85, icon: Server, category: 'backend' },
    { name: 'Python', level: 80, icon: Brain, category: 'ml' },
    { name: 'PostgreSQL', level: 78, icon: Database, category: 'database' },
    { name: 'MongoDB', level: 75, icon: Database, category: 'database' },
    
    // ML & AI
    { name: 'TensorFlow', level: 75, icon: Brain, category: 'ml' },
    { name: 'Scikit-learn', level: 70, icon: Brain, category: 'ml' },
    
    // DevOps
    { name: 'Docker', level: 82, icon: Cloud, category: 'devops' },
    { name: 'Kubernetes', level: 75, icon: Cloud, category: 'devops' }
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', level: 80, type: 'SQL', icon: Database },
    { name: 'MySQL', level: 75, type: 'SQL', icon: Database },
    { name: 'MongoDB', level: 78, type: 'NoSQL', icon: Database },
    { name: 'Firebase', level: 82, type: 'NoSQL', icon: Cloud }
  ];

  const mlSkills = [
    { name: 'Python', level: 85, framework: 'Programming' },
    { name: 'TensorFlow', level: 75, framework: 'Deep Learning' },
    { name: 'Keras', level: 70, framework: 'Neural Networks' },
    { name: 'Scikit-learn', level: 80, framework: 'ML Algorithms' },
    { name: 'Pandas', level: 82, framework: 'Data Analysis' },
    { name: 'NumPy', level: 85, framework: 'Scientific Computing' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'from-blue-500 to-cyan-500',
      mobile: 'from-purple-500 to-pink-500',
      backend: 'from-green-500 to-emerald-500',
      ml: 'from-orange-500 to-red-500',
      database: 'from-indigo-500 to-purple-500',
      devops: 'from-teal-500 to-cyan-500'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      frontend: Code,
      mobile: Smartphone,
      backend: Server,
      ml: Brain,
      database: Database,
      devops: Cloud
    };
    return icons[category] || Code;
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="animated-bg"></div>
      <div className="grid-background"></div>
      
      {/* Floating Elements */}
      <div className="floating-orb orb-4"></div>
      <div className="floating-orb orb-5"></div>
      <div className="floating-orb orb-6"></div>

      {/* Animated Particles */}
      <div className="particle-container">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Connection Lines */}
      <div className="connection-lines">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="connection-line"
            style={{
              top: `${15 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 animate-slide-in-top">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-expand"></div>
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-expand"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-hero animate-scale-in">
            About Me
          </h2>
          
          <div className="relative inline-block">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-expand"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-ping-slow"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
          {/* Left Column - Bio */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Main Card */}
              <div className="relative bg-slate-900/70 backdrop-blur-xl p-10 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500 transform group-hover:scale-[1.02]">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400/50 rounded-bl-2xl"></div>

                <h3 className="text-4xl font-bold text-white mb-6 gradient-text animate-gradient-x">
                  Software Engineer & AI Developer
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm a versatile Software Engineer with expertise spanning full-stack development, 
                    cross-platform mobile applications, and machine learning solutions. I create 
                    comprehensive digital experiences that leverage the latest technologies across 
                    web, mobile, and AI domains.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    My core expertise includes <span className="text-blue-400 font-semibold">React.js</span> and <span className="text-cyan-400 font-semibold">React Native</span> for dynamic 
                    web and mobile applications, <span className="text-purple-400 font-semibold">Flutter</span> for cross-platform solutions, and 
                    <span className="text-green-400 font-semibold"> Python with TensorFlow</span> for machine learning and AI implementations. 
                    I'm proficient in backend development with <span className="text-emerald-400 font-semibold">Node.js</span> and database management 
                    with <span className="text-orange-400 font-semibold">PostgreSQL</span> and <span className="text-yellow-400 font-semibold">MongoDB</span>.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm passionate about building scalable, efficient applications with clean architecture, 
                    modern development practices, and cutting-edge AI integration.
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['React.js', 'React Native', 'Flutter', 'Python', 'TensorFlow', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'TypeScript'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-card group relative bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    
                    <div className="text-5xl font-bold gradient-text mb-2 animate-count-up">
                      {stat.value}
                    </div>
                    
                    <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Skills Overview */}
            <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-6 gradient-text text-center">
                Core Expertise
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Frontend', level: 90, color: 'from-blue-500 to-cyan-500' },
                  { name: 'Mobile', level: 85, color: 'from-purple-500 to-pink-500' },
                  { name: 'Backend', level: 85, color: 'from-green-500 to-emerald-500' },
                  { name: 'ML/AI', level: 80, color: 'from-orange-500 to-red-500' }
                ].map((skill, index) => (
                  <div key={skill.name} className="text-center group">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-20 flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-all duration-300`}>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${skill.color}`}></div>
                    </div>
                    <div className="text-gray-300 font-medium text-sm mb-1">{skill.name}</div>
                    <div className="text-cyan-400 text-lg font-bold">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Tech Stack */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 gradient-text">
              Technology Stack
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive expertise across multiple technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['frontend', 'mobile', 'backend', 'ml', 'database', 'devops'].map((category, categoryIndex) => {
              const categoryTechs = techStack.filter(tech => tech.category === category);
              const CategoryIcon = getCategoryIcon(category);
              const categoryColor = getCategoryColor(category);
              
              return (
                <div
                  key={category}
                  className="group relative bg-slate-900/70 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColor} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white capitalize">
                      {category === 'ml' ? 'Machine Learning' : category}
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    {categoryTechs.map((tech, techIndex) => (
                      <div key={tech.name} className="flex items-center justify-between group/tech">
                        <div className="flex items-center gap-2">
                          <tech.icon className="w-4 h-4 text-gray-400 group-hover/tech:text-cyan-400 transition-colors duration-300" />
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </div>
                        <div className="text-cyan-400 text-sm font-bold">{tech.level}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Database & ML Specializations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Database Skills */}
          <div className="animate-slide-in-left">
            <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-6 gradient-text text-center">
                Database Expertise
              </h4>
              <div className="space-y-4">
                {databaseSkills.map((db, index) => (
                  <div key={db.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <db.icon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 font-medium">{db.name}</span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          db.type === 'SQL' 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-purple-500/20 text-purple-300'
                        }`}>
                          {db.type}
                        </span>
                      </div>
                      <span className="text-cyan-400 text-sm font-bold">{db.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transform origin-left transition-all duration-1000 ease-out animate-expand-progress"
                        style={{ 
                          width: `${db.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ML Skills */}
          <div className="animate-slide-in-right">
            <div className="bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-6 gradient-text text-center">
                Machine Learning
              </h4>
              <div className="space-y-4">
                {mlSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.framework}</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform origin-left transition-all duration-1000 ease-out animate-expand-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4 gradient-text animate-slide-in-bottom">
            My Services
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in">
            End-to-end software development solutions across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative bg-slate-900/70 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature}
                      className="text-gray-300 text-xs flex items-center gap-2 group-hover:text-cyan-300 transition-colors duration-300 animate-fade-in"
                      style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-12 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4 gradient-text">
              Ready to Build Intelligent Solutions?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create cutting-edge web, mobile, and AI solutions that drive your business forward.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-white hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transform transition-all duration-300 animate-pulse-subtle"
            >
              <span>Start a Project</span>
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}