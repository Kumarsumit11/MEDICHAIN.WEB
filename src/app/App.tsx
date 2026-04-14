import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import {
  Activity,
  Database,
  Shield,
  Zap,
  Lock,
  FileText,
  Brain,
  Users,
  Server,
  Cpu,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Menu,
  X,
  Clock,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Check
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'features', 'technology', 'team', 'cta'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-xl bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-xl bg-[#06B6D4] flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              MediChain
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Problem', 'Solution', 'Features', 'Technology', 'Team'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-[#06B6D4] ${
                  activeSection === item.toLowerCase() ? 'text-[#06B6D4]' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('cta')}
              className="px-6 py-2.5 rounded-lg bg-[#06B6D4] font-semibold text-sm hover:bg-[#0891B2] transition-all"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg p-6"
          >
            <div className="flex flex-col gap-4">
              {['Problem', 'Solution', 'Features', 'Technology', 'Team'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-sm font-medium text-gray-600 hover:text-[#06B6D4] transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('cta')}
                className="mt-2 px-6 py-2.5 rounded-lg bg-[#06B6D4] font-semibold text-sm text-white hover:bg-[#0891B2] transition-all"
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen pt-20 relative overflow-hidden flex items-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></div>
              <span className="text-sm font-medium text-[#06B6D4]">Enterprise Healthcare Infrastructure</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Verified by Blockchain,
              <br />
              Protected by Zero-Trust.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Deploying advanced cryptographic verification and AI-driven insights to establish the most secure patient data exchange network in modern medicine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <button
                onClick={() => scrollToSection('solution')}
                className="px-8 py-4 rounded-lg bg-[#06B6D4] text-white font-semibold text-base hover:bg-[#0891B2] transition-all flex items-center justify-center gap-2"
              >
                Explore Solution
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold text-base hover:bg-gray-50 transition-all"
              >
                Request Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <button
  onClick={() => window.open('https://drive.google.com/file/d/1hMqE1thlhgPNQaNmsitkPkNKiK3M4-Zy/view?usp=drive_link', '_blank')}
  className="text-sm text-gray-500 hover:text-[#06B6D4] transition-colors inline-flex items-center gap-2 underline"
>
                📊 View Full Presentation & Documentation
              </button>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '99.9%', label: 'Uptime SLA', delay: 0.4 },
                { value: '256-bit', label: 'Encryption', delay: 0.5 },
                { value: '50ms', label: 'Auth Latency', delay: 0.6 },
                { value: '100%', label: 'HIPAA Compliant', delay: 0.7 }
              ].map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 bg-white text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="The Challenge"
            title="The Challenge in Healthcare Interoperability"
            dark
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Database,
                title: 'Data Silos',
                description: 'Patient records scattered across incompatible systems create dangerous gaps in care continuity and emergency response capabilities.'
              },
              {
                icon: AlertTriangle,
                title: 'Security Vulnerabilities',
                description: 'Legacy infrastructure exposes sensitive health data to breach risks, compliance violations, and unauthorized access threats.'
              },
              {
                icon: Clock,
                title: 'Emergency Accessibility',
                description: 'Critical patient information remains locked during emergencies, delaying treatment decisions and potentially compromising outcomes.'
              }
            ].map((problem, index) => (
              <ProblemCard key={index} {...problem} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Architecture"
            title="The MediChain Architecture"
            dark
          />

          <ArchitectureDiagram />
        </div>
      </section>

{/* Presentation Section */}
<section id="presentation" className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionHeader
      label="Full Deck"
      title="MediChain"
      dark
    />

    <motion.div
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  whileHover={{ y: -6 }}
  className="mt-16 w-full rounded-2xl"
>
  <div
    className="relative rounded-2xl overflow-hidden bg-gray-100 border-2 border-[#06B6D4]/30 shadow-lg"
    style={{
      paddingBottom: '56.25%',
      animation: 'glow 3s ease-in-out infinite',
    }}
  >
    <style>{`
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.15); }
        50% { box-shadow: 0 0 50px rgba(6,182,212,0.4); }
      }
    `}</style>
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://drive.google.com/file/d/1hMqE1thlhgPNQaNmsitkPkNKiK3M4-Zy/preview"
      allowFullScreen
    />
  </div>
</motion.div>
  </div>
</section>

      {/* Video Section */}
<section id="video" className="py-32 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <SectionHeader
      label="See It In Action"
      title="MediChain Platform Demo"
      dark
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 max-w-5xl mx-auto"
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-lg"
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://drive.google.com/file/d/1qIkb2jHMefQeI_P_3EHjJk36nL3u8r0a/preview"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </motion.div>
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Platform Features"
            title="Everything You Need to Scale Safely"
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Shield,
                title: 'Zero-Trust Framework',
                description: 'Every access request verified through multi-layered cryptographic authentication and behavioral analysis.'
              },
              {
                icon: Lock,
                title: 'Immutable Records',
                description: 'Blockchain-anchored audit trails ensure complete tamper-proof history of all data access and modifications.'
              },
              {
                icon: Brain,
                title: 'Predictive Analytics',
                description: 'AI-powered insights detect anomalies, predict outcomes, and optimize care pathways across patient populations.'
              },
              {
                icon: Users,
                title: 'Unified Health ID',
                description: 'Single cryptographic identity links all patient records while maintaining privacy and consent controls.'
              },
              {
                icon: Server,
                title: 'High Availability',
                description: 'Distributed architecture with 99.9% uptime SLA ensures critical systems remain accessible 24/7/365.'
              },
              {
                icon: FileText,
                title: 'Clinical Collaboration',
                description: 'Secure real-time data sharing enables coordinated care across specialists, facilities, and care teams.'
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="py-32 bg-gray-50 text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Under the Hood"
            title="Technology Stack"
            dark
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mt-12 mb-12">
            {[
              { id: 'all', label: 'All Tech' },
              { id: 'core', label: 'Core Architecture' },
              { id: 'security', label: 'Security & Data' },
              { id: 'intelligence', label: 'Intelligence' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[#06B6D4] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Tech Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getTechStack(activeFilter).map((tech, index) => (
              <TechCard key={index} {...tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="The People"
            title="The Core Team"
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                name: 'Juhi Jha',
                role: 'Blockchain Lead',
                description: 'Architecting immutable ledger systems for healthcare data integrity and cryptographic verification.',
                avatar: 'JJ',
                color: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Preetika',
                role: 'UI/UX Designer',
                description: 'Designing intuitive interfaces that make complex healthcare workflows seamless and accessible.',
                avatar: 'P',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Jyotir',
                role: 'Database Architect',
                description: 'Engineering high-performance data infrastructure for secure, scalable patient record management.',
                avatar: 'J',
                color: 'from-green-500 to-emerald-500'
              },
              {
                name: 'Sumit',
                role: 'Backend Engineer',
                description: 'Building robust API infrastructure and zero-trust security protocols for enterprise healthcare systems.',
                avatar: 'S',
                color: 'from-orange-500 to-red-500'
              }
            ].map((member, index) => (
              <TeamCard key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Scale Your Healthcare Infrastructure Safely
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join leading medical institutions deploying the world's most resilient Zero-Trust AI Healthcare Network.
            </p>
            <button
              onClick={() => window.open('mailto:contact@medichain.com?subject=Onboarding Request', '_blank')}
              className="px-10 py-5 rounded-lg bg-[#06B6D4] text-white font-bold text-lg hover:bg-[#0891B2] transition-all shadow-lg"
            >
              Initiate Onboarding
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#06B6D4] flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-xl text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  MediChain
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                The world's most secure patient data exchange network, powered by blockchain and zero-trust architecture.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Github, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-[#06B6D4] hover:border-[#06B6D4] transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.open('YOUR_PRESENTATION_FILE_PATH.pptx', '_blank'); }} className="text-gray-400 hover:text-[#06B6D4] transition-colors flex items-center gap-2">
                    📊 Presentation
                  </a>
                </li>
                {['Documentation', 'API Reference', 'Case Studies', 'White Paper'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#06B6D4] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 MediChain Global. All Rights Reserved. HIPAA Compliant.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components

function SectionHeader({ label, title, dark = false }: { label: string; title: string; dark?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        dark ? 'bg-[#0F172A]/5 border border-[#0F172A]/10' : 'bg-white/5 border border-[#06B6D4]/30'
      } backdrop-blur-sm mb-6`}>
        <span className={`text-sm font-semibold ${dark ? 'text-[#06B6D4]' : 'text-[#06B6D4]'}`}>
          {label}
        </span>
      </div>
      <h2 className={`text-4xl md:text-5xl font-bold ${dark ? 'text-[#0F172A]' : 'text-white'}`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {title}
      </h2>
    </motion.div>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && value.includes('%')) {
      const target = parseFloat(value);
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all"
    >
      <div className="text-3xl font-bold text-[#06B6D4] mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {value.includes('%') ? `${count.toFixed(1)}%` : value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
}

function ProblemCard({ icon: Icon, title, description, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all group"
    >
      <div className="w-14 h-14 rounded-xl bg-[#06B6D4] flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function ArchitectureDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nodes = [
    { id: 'patient', label: 'Verified Patient', icon: Users, x: 0 },
    { id: 'qr', label: 'QR Gateway', icon: Zap, x: 20 },
    { id: 'auth', label: 'Zero-Trust Auth', icon: Shield, x: 40 },
    { id: 'ledger', label: 'Ledger Verification', icon: Lock, x: 60 },
    { id: 'ai', label: 'AI Intelligence', icon: Brain, x: 80 }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-16 relative"
    >
      <div className="relative h-64 flex items-center justify-between max-w-5xl mx-auto px-4">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {nodes.slice(0, -1).map((node, index) => (
            <motion.line
              key={index}
              x1={`${node.x}%`}
              y1="50%"
              x2={`${nodes[index + 1].x}%`}
              y2="50%"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative z-10 flex flex-col items-center"
            style={{ position: 'absolute', left: `${node.x}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#06B6D4] flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform">
              <node.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
            </div>
            <span className="text-xs md:text-sm font-semibold text-center whitespace-nowrap px-2 text-gray-900">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all group"
    >
      <div className="w-12 h-12 rounded-lg bg-[#06B6D4] flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

function TechCard({ name, category, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-lg hover:border-[#06B6D4]/50 transition-all hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-3">
        <Cpu className="w-5 h-5 text-[#06B6D4]" />
        <h3 className="font-bold text-[#0F172A]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          {name}
        </h3>
      </div>
      <span className="inline-block px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-semibold">
        {category}
      </span>
    </motion.div>
  );
}

function TeamCard({ name, role, description, avatar, color, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all group"
    >
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 text-white text-2xl font-bold`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {avatar}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {name}
      </h3>
      <p className="text-[#06B6D4] font-semibold text-sm mb-4">
        {role}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex gap-3">
        {[Mail, Linkedin, Github].map((Icon, i) => (
          <button
            key={i}
            className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-[#06B6D4] hover:border-[#06B6D4] hover:text-white transition-all text-gray-600"
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function getTechStack(filter: string) {
  const allTech = [
    { name: 'React Native', category: 'Core', filter: 'core' },
    { name: 'Node.js', category: 'Core', filter: 'core' },
    { name: 'Ethereum', category: 'Blockchain', filter: 'security' },
    { name: 'TensorFlow', category: 'AI/ML', filter: 'intelligence' },
    { name: 'SQLite', category: 'Database', filter: 'security' },
    { name: 'GraphQL', category: 'API', filter: 'core' },
    { name: 'Kubernetes', category: 'Infrastructure', filter: 'core' },
    { name: 'Redis', category: 'Cache', filter: 'security' },
    { name: 'PostgreSQL', category: 'Database', filter: 'security' },
    { name: 'PyTorch', category: 'AI/ML', filter: 'intelligence' },
    { name: 'Docker', category: 'Infrastructure', filter: 'core' },
    { name: 'AWS', category: 'Cloud', filter: 'core' },
    { name: 'IPFS', category: 'Storage', filter: 'security' },
    { name: 'Hyperledger', category: 'Blockchain', filter: 'security' },
    { name: 'scikit-learn', category: 'AI/ML', filter: 'intelligence' },
    { name: 'FHIR', category: 'Healthcare', filter: 'core' }
  ];

  if (filter === 'all') return allTech;
  return allTech.filter(tech => tech.filter === filter);
}
