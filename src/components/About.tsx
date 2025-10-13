import { Code, Palette, Zap, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '30+', label: 'Technologies' }
  ];

  const services = [
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Building scalable, maintainable applications with modern frameworks and best practices'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love'
    },
    {
      icon: Zap,
      title: 'DevOps & Cloud',
      description: 'Container orchestration with Docker & Kubernetes, CI/CD pipelines, cloud infrastructure'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Delivering reliable, tested, and maintainable code'
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="floating-orb orb-4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-bottom">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-expand"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105">
                <h3 className="text-3xl font-bold text-white mb-4 gradient-text">Software Engineer & Cloud Architect</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate software engineer with expertise in building exceptional digital experiences
                  and scalable cloud infrastructure. With a strong foundation in full-stack development, DevOps,
                  and container orchestration, I create solutions that are robust, efficient, and production-ready.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans across Java, PHP, HTML, modern frameworks like React and Next.js,
                  along with containerization using Docker and orchestration with Kubernetes. I excel at
                  deploying and managing applications on cloud platforms and hosting solutions like Hostinger.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card group relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 text-center transform hover:scale-110 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-4xl font-bold gradient-text mb-2 animate-count-up">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
