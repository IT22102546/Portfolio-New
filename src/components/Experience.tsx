import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Corp',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications using React, Node.js, and cloud technologies. Mentoring junior developers and establishing best practices.',
      achievements: [
        'Improved application performance by 60%',
        'Led team of 5 developers',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      company: 'Digital Solutions Inc',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams.',
      achievements: [
        'Delivered 20+ successful projects',
        'Reduced load times by 40%',
        'Introduced automated testing'
      ]
    },
    {
      company: 'StartUp Ventures',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Built responsive web applications and worked on UI/UX improvements. Focused on creating seamless user experiences.',
      achievements: [
        'Increased user engagement by 35%',
        'Redesigned main product interface',
        'Implemented responsive design system'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="floating-orb orb-7"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-bottom">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-expand"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`experience-card relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-5/12 w-full">
                  <div className="group relative bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-500"></div>

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Briefcase className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-blue-300 font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                            <p className="text-gray-400 text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50 animate-pulse-subtle"></div>
                </div>

                <div className="lg:w-5/12 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
