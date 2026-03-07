import { Scale, Home, Gavel, ShieldCheck, Phone, Mail, MapPin, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SEO Keywords for reference
  const seoKeywords = [
    "LTB paralegal Ontario",
    "Landlord tenant legal help",
    "Small claims court paralegal",
    "Ontario paralegal services",
    "Jaksh Patel Paralegal",
    "Eviction help Ontario",
    "Debt recovery Ontario",
    "Small claims representation"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Scale className="w-8 h-8 text-slate-900" />
            <div>
              <span className="text-xl font-bold tracking-tight block leading-none">Jaksh Patel</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Licensed Paralegal</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              {['Home', 'About', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-left text-lg font-medium text-slate-600"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          </div>
          <div className="section-padding relative z-10 pt-32 pb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Expert Legal Representation for Ontario Residents.
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Specializing in Landlord and Tenant Board matters and Small Claims Court disputes. 
                Jaksh Patel provides professional, affordable, and results-driven legal services across Ontario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
                  Book a Free Consultation
                </button>
                <button onClick={() => scrollToSection('services')} className="btn-secondary border-white/30 text-white hover:bg-white/10">
                  View Legal Services
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Summary (Home Page) */}
        <section className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-900">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">LTB Matters</h3>
                <p className="text-sm text-slate-500">Evictions, rent arrears, and tenant rights disputes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-900">
                <Gavel className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Small Claims</h3>
                <p className="text-sm text-slate-500">Debt recovery, contract disputes, and property damage.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-lg text-slate-900">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Licensed & Insured</h3>
                <p className="text-sm text-slate-500">Professional representation you can trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-slate-50">
          <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Jaksh Patel - Professional Paralegal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-xl shadow-xl hidden lg:block">
                <p className="text-4xl font-bold text-slate-900 mb-1 italic">"Results Matter."</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Jaksh Patel, Licensed Paralegal</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 block">About the Firm</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Dedicated to Protecting Your Rights.</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Jaksh Patel is a licensed Ontario paralegal with a deep commitment to providing accessible and high-quality legal representation. 
                  Navigating the legal system can be overwhelming, especially when your home or financial stability is at stake.
                </p>
                <p>
                  With extensive experience appearing before the Landlord and Tenant Board (LTB) and in Small Claims Court, 
                  Jaksh focuses on delivering strategic advice and vigorous advocacy. Our firm is built on the pillars of 
                  <strong> affordability, professionalism, and unwavering client support</strong>.
                </p>
                <p>
                  Whether you are a landlord seeking to regain possession of your property, a tenant facing unfair treatment, 
                  or a business owner looking to recover outstanding debts, we provide the personalized attention your case deserves.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-700">Trusted by 200+ clients across Ontario</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white">
          <div className="section-padding">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Legal Solutions</h2>
              <p className="text-slate-600">We specialize in two core areas of Ontario law, ensuring our clients receive focused and expert representation.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* LTB Section */}
              <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Landlord & Tenant Board</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  The Residential Tenancies Act is complex. We represent both landlords and tenants in all matters before the LTB, ensuring compliance and protecting your interests.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Eviction Applications (N4, N5, N7, N12, N13)',
                    'Rent Arrears & Non-Payment Disputes',
                    'Tenant Rights & Maintenance Issues',
                    'Lease Terminations & Agreements',
                    'Representation at LTB Hearings',
                    'Mediation & Settlement Negotiations'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 font-bold text-slate-900 group-hover:gap-4 transition-all">
                  Consult on LTB Matter <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Small Claims Section */}
              <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Gavel className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Small Claims Court</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  For claims up to $35,000, we provide cost-effective legal services to help you recover what you are owed or defend against unjust claims.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Debt Recovery & Collection',
                    'Breach of Contract Disputes',
                    'Property Damage Claims',
                    'Unpaid Invoices & Service Fees',
                    'Drafting & Filing Claims/Defences',
                    'Representation at Settlement Conferences'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 font-bold text-slate-900 group-hover:gap-4 transition-all">
                  Consult on Small Claims <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="bg-slate-900 text-white">
          <div className="section-padding">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 block">The Advantage</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Hire Jaksh Patel?</h2>
                <div className="space-y-8">
                  {[
                    { title: 'Proven Track Record', desc: 'Years of experience navigating the LTB and Small Claims Court with successful outcomes.' },
                    { title: 'Affordable Fixed Rates', desc: 'Transparent pricing with no hidden fees. We offer competitive rates compared to traditional law firms.' },
                    { title: 'Personalized Strategy', desc: 'Every case is unique. We build a custom legal strategy tailored to your specific goals.' },
                    { title: 'Direct Communication', desc: 'You deal directly with your paralegal. No gatekeepers, just clear and timely updates.' },
                    { title: 'Professional Integrity', desc: 'Licensed by the Law Society of Ontario and held to the highest ethical standards.' },
                    { title: 'Results-Oriented Focus', desc: 'We don\'t just file paperwork; we advocate for the best possible resolution for you.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-2 italic">"Jaksh saved my rental property from a non-paying tenant who had been there for 6 months. Professional and efficient."</h3>
                  <p className="text-slate-400">— Sarah M., Toronto Landlord</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-6 rounded-2xl text-center">
                    <p className="text-3xl font-bold mb-1">98%</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Success Rate</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl text-center">
                    <p className="text-3xl font-bold mb-1">500+</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Cases Handled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white">
          <div className="section-padding">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 block">Contact Us</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Your Consultation Today.</h2>
                <p className="text-slate-600 mb-10 text-lg">
                  Don't wait for legal issues to escalate. Contact us today for a confidential assessment of your matter.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Call or Text</p>
                      <p className="text-xl font-bold">(416) 555-0198</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email Address</p>
                      <p className="text-xl font-bold">jaksh@patellegal.ca</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Service Area</p>
                      <p className="text-xl font-bold">Ontario, Canada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" placeholder="(416) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Description of Legal Issue</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" placeholder="Briefly describe your situation..."></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 text-lg">
                    Send Message
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold tracking-tight">Jaksh Patel Legal</span>
              </div>
              <p className="text-slate-400 max-w-md mb-8">
                Providing professional legal representation for Landlord and Tenant Board and Small Claims Court matters across Ontario. 
                Licensed by the Law Society of Ontario.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-500">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button className="hover:text-white transition-colors">Disclaimer</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <div className="bg-white/5 p-6 rounded-xl mb-10">
              <h5 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Legal Disclaimer</h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                The information provided on this website is for general informational purposes only and does not constitute legal advice. 
                Accessing or using this website does not create a paralegal-client relationship between you and Jaksh Patel. 
                Legal matters are time-sensitive and complex; you should consult with a licensed legal professional regarding your specific situation. 
                Past results are not indicative of future outcomes.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
              <p>© {new Date().getFullYear()} Jaksh Patel Legal Services. All rights reserved.</p>
              <div className="flex gap-6">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> LSO Licensed</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Insured</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SEO Keywords (Hidden for screen readers/bots) */}
      <div className="sr-only">
        {seoKeywords.join(', ')}
      </div>
    </div>
  );
}
