import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  // Generate connection lines
  const connectionLines = [...Array(8)].map((_, i) => (
    <div
      key={i}
      className="connection-line"
      style={{
        top: `${Math.random() * 100}%`,
        width: `${30 + Math.random() * 70}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${3 + Math.random() * 3}s`
      }}
    />
  ));

  // Generate binary rain
  const binaryDigits = [...Array(50)].map((_, i) => (
    <div
      key={i}
      className="binary-digit"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${6 + Math.random() * 6}s`
      }}
    >
      {Math.random() > 0.5 ? '1' : '0'}
    </div>
  ));

  // Generate magnetic field lines
  const fieldLines = [...Array(12)].map((_, i) => (
    <div
      key={i}
      className="field-line"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${200 + Math.random() * 300}px`,
        height: `${200 + Math.random() * 300}px`,
        animationDelay: `${Math.random() * 8}s`
      }}
    />
  ));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Advanced Background Elements */}
      <div className="animated-bg"></div>
      <div className="grid-background"></div>
      <div className="connection-lines">
        {connectionLines}
      </div>
      <div className="pulsing-rings">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="pulse-ring"></div>
        ))}
      </div>
      <div className="binary-rain">
        {binaryDigits}
      </div>
      <div className="magnetic-field">
        {fieldLines}
      </div>

      {/* Enhanced Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      <div className="floating-orb orb-5"></div>
      <div className="floating-orb orb-6"></div>
      <div className="floating-orb orb-7"></div>
      <div className="floating-orb orb-8"></div>

      {/* Enhanced Particles */}
      <div className="particle-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-block mb-6 animate-slide-in-top">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold backdrop-blur-sm flex items-center gap-2 animate-pulse-glow">
                <Sparkles className="w-4 h-4" />
                Welcome to My Portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              <span className="gradient-text-hero animate-gradient-x">
                Hi, I'm Sanjana Nimesh
              </span>
            </h1>

            <div className="text-xl md:text-3xl text-gray-300 mb-4 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <span className="typing-animation">Software Engineer</span>
            </div>

            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed animate-slide-in-right" style={{ animationDelay: '400ms' }}>
              Crafting exceptional digital experiences with cutting-edge technologies.
              Specializing in Full Stack Development, DevOps, Cloud Infrastructure, and Container Orchestration.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-slide-in-bottom" style={{ animationDelay: '600ms' }}>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-white overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-subtle"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#projects"
                className="group px-8 py-4 border-2 border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform animate-bounce" />
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '800ms' }}>
              {[
                { icon: Github, href: 'https://github.com/IT22102546', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjana-nimesh-a4b5a8252/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:sanjana.nim2001@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group p-4 rounded-full border border-blue-400/30 bg-blue-500/5 hover:bg-blue-500/20 transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/50 backdrop-blur-sm"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl shadow-blue-500/50 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/MyDP.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}