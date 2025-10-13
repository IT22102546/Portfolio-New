import { Briefcase, Calendar, Award, TrendingUp, Users, Rocket, Star, Zap } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const experiences = [
    // ... your experiences data remains the same
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simplified animation class for mobile
  const getAnimationClass = (index) => {
    if (isMobile) return 'opacity-100'; // No animations on mobile
    return isVisible ? 'animate-scale-in' : 'opacity-0';
  };

  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden min-h-screen" ref={sectionRef}>
      {/* Conditional background elements - hide on mobile */}
      {!isMobile && (
        <>
          <div className="floating-orb orb-7"></div>
          <div className="timeline-glow"></div>
          <div className="experience-particles"></div>
          <div className="connection-network">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="connection-node" style={{ animationDelay: `${i * 0.5}s` }}></div>
            ))}
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-block relative mb-6 lg:mb-8">
            {!isMobile && (
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            )}
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold gradient-text-hero animate-gradient-shift relative">
              Career Journey
            </h2>
          </div>
          <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-4 lg:mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-300 mt-4 lg:mt-6 max-w-3xl mx-auto leading-relaxed px-4">
            My professional evolution through innovative roles and groundbreaking achievements
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Timeline Navigation - Mobile becomes horizontal scroll */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-600/30 p-4 lg:p-6">
              <h3 className="text-xl lg:text-2xl font-bold gradient-text mb-4 lg:mb-6 flex items-center gap-3">
                <Briefcase className="w-5 h-5 lg:w-6 lg:h-6" />
                Roles
              </h3>
              
              {/* Mobile: Horizontal scroll */}
              <div className={`${isMobile ? 'flex space-x-3 overflow-x-auto pb-4 -mx-2 px-2' : 'space-y-3'}`}>
                {experiences.map((exp, index) => (
                  <button
                    key={exp.position}
                    onClick={() => setActiveExp(index)}
                    className={`${
                      isMobile 
                        ? 'flex-shrink-0 w-32' 
                        : 'w-full'
                    } text-left p-3 lg:p-4 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                      activeExp === index
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 shadow-2xl shadow-blue-500/20'
                        : 'bg-slate-800/50 border border-slate-600/30 hover:border-slate-500/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        activeExp === index 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : 'bg-slate-700 text-gray-400'
                      }`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-sm truncate ${
                          activeExp === index ? 'text-white' : 'text-gray-400'
                        }`}>
                          {exp.position.split(' ')[0]}
                        </h4>
                        <p className={`text-xs ${
                          activeExp === index ? 'text-blue-300' : 'text-gray-500'
                        }`}>
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-slate-800/50 rounded-xl border border-slate-600/30">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Career Progress</span>
                  <span>{Math.round((activeExp + 1) / experiences.length * 100)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(activeExp + 1) / experiences.length * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Content */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Timeline - Hide on mobile */}
              {!isMobile && (
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden lg:block rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-cyan-500 animate-pulse-glow rounded-full"></div>
                </div>
              )}

              <div className="space-y-6 lg:space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.company}
                    className={`experience-timeline-card group relative ${getAnimationClass(index)}`}
                    style={{ animationDelay: isMobile ? '0ms' : `${index * 300}ms` }}
                    onMouseEnter={!isMobile ? () => setActiveExp(index) : undefined}
                  >
                    {/* Timeline Node - Hide on mobile */}
                    {!isMobile && (
                      <div className="absolute left-0 lg:left-6 transform -translate-x-1/2 z-20">
                        <div className={`relative ${
                          activeExp === index 
                            ? 'scale-125 animate-ping-slow' 
                            : 'scale-100'
                        } transition-transform duration-500`}>
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-900 shadow-2xl shadow-blue-500/50"></div>
                          {activeExp === index && (
                            <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping"></div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Experience Card */}
                    <div className={isMobile ? "" : "ml-8 lg:ml-12"}>
                      <div className={`advanced-experience-card relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-600/30 overflow-hidden transition-all duration-500 ${
                        activeExp === index ? 'border-blue-500/50' : 'group-hover:border-blue-500/30'
                      }`}>
                        
                        {/* Simplified effects on mobile */}
                        {!isMobile && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </>
                        )}

                        <div className="relative z-10 p-4 lg:p-6">
                          {/* Header */}
                          <div className="flex flex-col gap-4 mb-4 lg:mb-6">
                            <div className="flex-1">
                              <div className="flex items-start lg:items-center gap-3 lg:gap-4 mb-3">
                                <div className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ${
                                  !isMobile && 'group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6'
                                }`}>
                                  {exp.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white break-words">
                                    {exp.position}
                                  </h3>
                                  <p className="text-base lg:text-lg text-blue-300 font-semibold flex flex-wrap items-center gap-2 mt-1">
                                    {exp.company}
                                    <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                                      {exp.level}
                                    </span>
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-3 text-gray-400 mt-2">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                <span className="font-medium text-sm">{exp.period}</span>
                                <span className="text-xs px-2 py-1 bg-slate-700/50 rounded-full">
                                  {exp.duration}
                                </span>
                              </div>
                            </div>

                            {/* Achievement Badge */}
                            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 self-start">
                              <Award className="w-3 h-3 text-green-400" />
                              <span className="text-xs font-semibold text-green-400">
                                {exp.achievements.length} Achievements
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4 border-l-4 border-blue-500/50 pl-3 lg:pl-4">
                            {exp.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                              <Zap className="w-3 h-3" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                              <Star className="w-3 h-3" />
                              Key Achievements
                            </h4>
                            <div className="grid gap-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <div
                                  key={achievement}
                                  className="flex items-start gap-2 p-2 rounded-lg bg-slate-800/30 border border-slate-600/30"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1.5 flex-shrink-0"></div>
                                  <p className="text-gray-300 text-xs leading-relaxed">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-1 bg-slate-700">
                          <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                            style={{ width: `${((index + 1) / experiences.length) * 100}%` }}
                          >
                            {!isMobile && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Stats Summary */}
            <div className="mt-8 lg:mt-12 grid grid-cols-2 gap-3 lg:gap-4">
              <div className="stat-card-advanced bg-gradient-to-br from-blue-900/20 to-slate-900/80 backdrop-blur-xl rounded-xl p-3 lg:p-4 border border-blue-500/30 text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text mb-1">{experiences.length}</div>
                <div className="text-gray-400 text-xs">Career Roles</div>
              </div>
              <div className="stat-card-advanced bg-gradient-to-br from-purple-900/20 to-slate-900/80 backdrop-blur-xl rounded-xl p-3 lg:p-4 border border-purple-500/30 text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text mb-1">30+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
              <div className="stat-card-advanced bg-gradient-to-br from-cyan-900/20 to-slate-900/80 backdrop-blur-xl rounded-xl p-3 lg:p-4 border border-cyan-500/30 text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text mb-1">95%</div>
                <div className="text-gray-400 text-xs">Performance</div>
              </div>
              <div className="stat-card-advanced bg-gradient-to-br from-green-900/20 to-slate-900/80 backdrop-blur-xl rounded-xl p-3 lg:p-4 border border-green-500/30 text-center">
                <div className="text-xl lg:text-2xl font-bold gradient-text mb-1">100%</div>
                <div className="text-gray-400 text-xs">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}