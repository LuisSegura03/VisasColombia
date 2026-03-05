import { motion } from "motion/react";
import { Globe, Briefcase, ChevronRight, Phone, Mail, Instagram, Facebook, MapPin, Star } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* The checkmark-like V */}
        <path d="M25 45L45 85L85 15" stroke="#001a72" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        {/* The star on the left tip */}
        <path d="M25 45L20 35L10 35L18 28L15 18L25 25L35 18L32 28L40 35L30 35L25 45Z" fill="#001a72" />
      </svg>
    </div>
    <div className="flex flex-col leading-[0.85] font-serif-logo">
      <span className="text-3xl font-bold text-brand-navy tracking-tight">
        VISAS.
      </span>
      <span className="text-2xl font-normal text-brand-grey tracking-[0.15em] uppercase">
        COLOMBIA
      </span>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Logo />
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-brand-navy font-semibold hover:text-brand-accent transition-colors">Inicio</a>
          <a href="#visas" className="text-brand-navy font-semibold hover:text-brand-accent transition-colors">Visas de Trabajo</a>
          <a href="#contacto" className="text-brand-navy font-semibold hover:text-brand-accent transition-colors">Contacto</a>
        </div>
        <button className="md:hidden p-2 text-brand-navy">
          <Globe size={24} />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
    >
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
        alt="Business and Work" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-12 md:px-20">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-2xl"
        >
          TU FUTURO <br />
          <span className="text-white/90 uppercase">Laboral Global</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/80 mt-6 text-lg md:text-xl max-w-md leading-relaxed"
        >
          Asesoría experta en visas de trabajo para los mejores destinos del mundo. Tu carrera no tiene fronteras con Visas Colombia.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10"
        >
          <a href="#visas" className="bg-brand-navy hover:bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Ver Programas
            <ChevronRight size={20} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const VisaCard = ({ country, type, image, description }: { country: string, type: string, image: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5"
  >
    <div className="md:w-1/3 h-48 md:h-auto">
      <img src={image} alt={country} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="md:w-2/3 p-8 flex flex-col justify-center">
      <div className="flex items-center gap-2 text-brand-accent mb-3">
        <Briefcase size={18} />
        <span className="text-sm font-bold uppercase tracking-widest">{type}</span>
      </div>
      <h3 className="text-3xl font-bold text-brand-navy mb-4">{country}</h3>
      <p className="text-brand-navy/70 mb-6 leading-relaxed">{description}</p>
      <button className="self-start border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-2 rounded-full font-bold transition-all">
        Más Información
      </button>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar />
      
      <main>
        <Hero />

        {/* Visas de Trabajo */}
        <section id="visas" className="py-24 bg-brand-navy text-white">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Visas de Trabajo</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Te ayudamos a cumplir tu sueño de trabajar en el exterior. Asesoría completa para procesos migratorios laborales desde Colombia.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <VisaCard 
                country="Canadá" 
                type="Visa de Trabajo / Residencia" 
                image="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop"
                description="Programas de trabajadores calificados, nominaciones provinciales y visas de trabajo temporal. Canadá ofrece excelentes oportunidades para profesionales colombianos en diversas áreas."
              />
              <VisaCard 
                country="España" 
                type="Visa de Trabajo Cuenta Ajena" 
                image="https://images.unsplash.com/photo-1543783232-171f653dd392?q=80&w=2070&auto=format&fit=crop"
                description="Facilitamos tu proceso para trabajar en España. Desde la búsqueda de empleador hasta la obtención de la residencia por trabajo. Ideal para sectores de tecnología, salud y servicios."
              />
              <VisaCard 
                country="Australia" 
                type="Skilled Work Visa" 
                image="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop"
                description="Australia busca talento global. Te asesoramos en la evaluación de tus habilidades y en la aplicación a las visas de trabajo que permiten vivir y trabajar en este país de grandes oportunidades."
              />
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy/5 text-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4">Asesoría Personalizada</h4>
              <p className="text-brand-navy/60">Analizamos tu perfil profesional para encontrar la mejor opción migratoria.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy/5 text-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4">Alcance Global</h4>
              <p className="text-brand-navy/60">Conexiones con empleadores y entidades en los principales destinos laborales.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy/5 text-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ChevronRight size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4">Procesos Ágiles</h4>
              <p className="text-brand-navy/60">Gestión eficiente de documentos para minimizar tiempos de espera.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="bg-white border-t border-black/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="text-brand-navy/60 text-sm leading-relaxed mt-6">
              Tu aliado estratégico para el éxito laboral internacional. Expertos en asesoría migratoria y visas de trabajo.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-navy mb-6 uppercase tracking-widest text-xs">Servicios</h4>
            <ul className="space-y-4 text-sm text-brand-navy/60">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Inicio</a></li>
              <li><a href="#visas" className="hover:text-brand-accent transition-colors">Visas de Trabajo</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Asesoría Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm text-brand-navy/60">
              <li className="flex items-center gap-2"><Phone size={16} className="text-brand-accent" /> +57 300 123 4567</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-brand-accent" /> info@visascolombia.com</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-brand-accent" /> Bogotá, Colombia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-navy mb-6 uppercase tracking-widest text-xs">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy hover:bg-brand-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy hover:bg-brand-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/5 text-center text-brand-navy/40 text-xs">
          © {new Date().getFullYear()} Visas Colombia. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
