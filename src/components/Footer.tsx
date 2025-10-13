import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/IT22102546', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjana-nimesh-a4b5a8252/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:sanjana.nim2001@gmail.com', label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-blue-400/30 bg-blue-500/5 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-500/20 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Sanjana Nimesh. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
