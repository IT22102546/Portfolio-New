export default function Skills() {
  const technologies = [
    { name: 'HTML5', url: 'https://www.w3.org/html/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS3', url: 'https://www.w3schools.com/css/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'React', url: 'https://reactjs.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'React Native', url: 'https://reactnative.dev/', icon: 'https://reactnative.dev/img/header_logo.svg' },
    { name: 'Next.js', url: 'https://nextjs.org/', icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
    { name: 'Node.js', url: 'https://nodejs.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Express', url: 'https://expressjs.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
    { name: 'Redux', url: 'https://redux.js.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
    { name: 'Java', url: 'https://www.java.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Python', url: 'https://www.python.org', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'PHP', url: 'https://www.php.net', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
    { name: 'C', url: 'https://www.cprogramming.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'C++', url: 'https://www.w3schools.com/cpp/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', url: 'https://www.w3schools.com/cs/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
    { name: 'Kotlin', url: 'https://kotlinlang.org', icon: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'MS SQL Server', url: 'https://www.microsoft.com/en-us/sql-server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
    { name: 'Firebase', url: 'https://firebase.google.com/', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Git', url: 'https://git-scm.com/', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
    { name: 'Linux', url: 'https://www.linux.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
    { name: 'Android', url: 'https://developer.android.com', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg' },
    { name: 'Arduino', url: 'https://www.arduino.cc/', icon: 'https://cdn.worldvectorlogo.com/logos/arduino-1.svg' },
    { name: 'Docker', url: 'https://www.docker.com/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/', icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg' },
    { name: 'Figma', url: 'https://www.figma.com/', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'Postman', url: 'https://postman.com', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'MATLAB', url: 'https://www.mathworks.com/', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png' }
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="floating-orb orb-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-bottom">
            Technologies & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-expand"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noreferrer"
              className="tech-card group relative bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 flex flex-col items-center justify-center gap-3"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 rounded-xl transition-all duration-500 animate-pulse-subtle"></div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-blue-500/50"></div>

              <div className="relative transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain filter group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-500"
                />
              </div>

              <span className="relative text-xs text-gray-400 group-hover:text-blue-300 font-medium text-center transition-colors duration-300">
                {tech.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block relative bg-slate-900/80 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-500/30 animate-pulse-glow">
            <p className="text-gray-300">
              <span className="font-semibold gradient-text">Hosted on</span> Hostinger & Other Platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
