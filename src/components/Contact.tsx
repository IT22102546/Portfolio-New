import { Mail, Phone, MapPin, Send, Clock, Zap, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

// Initialize EmailJS (add this at the top)
emailjs.init("0dC8U10tkq7mtNRcK"); // Your public key

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - updated template params
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email, // Important for reply functionality
        to_email: 'sanjana.nim2001@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS with updated parameters
      const result = await emailjs.send(
        'service_x71pvhm', // Your EmailJS service ID
        'template_l9mjm0h', // Your EmailJS template ID
        templateParams,
        '0dC8U10tkq7mtNRcK' // Your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', {
        serviceId: 'service_x71pvhm',
        templateId: 'template_l9mjm0h',
        publicKey: '0dC8U10tkq7mtNRcK'
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sanjana.nim2001@gmail.com',
      href: 'mailto:sanjana.nim2001@gmail.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+94 76 989 9882',
      href: 'https://wa.me/94769899882',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Malabe, Sri Lanka',
      href: 'https://maps.google.com/?q=Malabe,Sri+Lanka',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden bg-slate-900">
      {/* Advanced Particle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-orb orb-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
      <div className="floating-orb orb-9 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      <div className="floating-orb orb-10 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20"></div>

      {/* Animated Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Let's Create
            </span>
            <br />
            <span className="text-white">Something Amazing</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences? 
            <span className="text-cyan-300 font-semibold"> Let's collaborate</span> and build something that stands out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Ultra Enhanced */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`group block relative bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)'
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:scale-105`}></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-4">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                    <info.icon className="w-7 h-7 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white font-medium transition-all duration-300">
                      {info.value}
                    </p>
                  </div>
                  
                  {/* Animated Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-slate-700/50 flex items-center justify-center">
                      <div className="w-2 h-2 border-r-2 border-t-2 border-white transform rotate-45 -translate-y-0.5"></div>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Premium Stats Card */}
            <div className="relative bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 group hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why Work With Me?</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors duration-300">
                    <span className="text-gray-300">Response Time</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">2-4 Hours</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors duration-300">
                    <span className="text-gray-300">Project Success</span>
                    <span className="text-cyan-400 font-semibold">100%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors duration-300">
                    <span className="text-gray-300">Availability</span>
                    <span className="text-purple-400 font-semibold">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 text-green-400">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="font-semibold">Message sent successfully!</span>
                  <span className="text-green-300">I'll get back to you soon.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 text-red-400">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <span className="font-semibold">Failed to send message.</span>
                  <span className="text-red-300">Please try again or email me directly.</span>
                </div>
              </div>
            )}

            <form 
              onSubmit={handleSubmit} 
              className={`relative bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 group hover:border-blue-500/50 transition-all duration-500 overflow-hidden ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ 
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)'
              }}
            >
              {/* Form Background Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

              <div className="relative space-y-8">
                {/* Double Input Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-300 mb-3 font-semibold text-sm uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-4 bg-slate-800/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 transition-all duration-300 placeholder-gray-500 backdrop-blur-sm"
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-focus-within:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-gray-300 mb-3 font-semibold text-sm uppercase tracking-wider">
                      Your Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 bg-slate-800/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300 placeholder-gray-500 backdrop-blur-sm"
                        placeholder="your.email@domain.com"
                        required
                        disabled={isSubmitting}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-focus-within:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label className="block text-gray-300 mb-3 font-semibold text-sm uppercase tracking-wider">
                    Project Type *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-4 bg-slate-800/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all duration-300 placeholder-gray-500 backdrop-blur-sm"
                      placeholder="e.g., Web App Development, UI/UX Design"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-gray-300 mb-3 font-semibold text-sm uppercase tracking-wider">
                    Project Details *
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-4 bg-slate-800/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-500 backdrop-blur-sm resize-none"
                      placeholder="Describe your project vision, timeline, budget, and any specific requirements..."
                      required
                      disabled={isSubmitting}
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl font-bold text-white overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute top-0 -left-24 w-12 h-full bg-white/20 skew-x-12 animate-shine group-hover:animate-shine-fast transition-all duration-500"></div>
                  </div>

                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Launch Project
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                      </>
                    )}
                  </span>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>
                </button>
              </div>
            </form>

            {/* Enhanced Footer Info */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available Now</span>
                </div>
                <div className="w-px h-4 bg-slate-600"></div>
                <span className="text-gray-400 text-sm">24/7 Support</span>
                <div className="w-px h-4 bg-slate-600"></div>
                <span className="text-cyan-400 text-sm font-medium">Secure Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}