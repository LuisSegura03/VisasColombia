import { motion } from "motion/react";
import { Globe, Briefcase, ChevronRight, Phone, Mail, Instagram, Facebook, MapPin, CheckCircle2, ArrowLeft, LogOut, Save, Edit, Trash2, Plus } from "lucide-react";
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState, FormEvent } from "react";

export interface Visa {
  id: string;
  country: string;
  type: string;
  image: string;
  description: string;
  details: {
    requirements: string[];
    benefits: string[];
    process: string[];
  };
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative flex items-center justify-center">
      <img 
        src="/logovisas.png" 
        alt="Visas Colombia Logo" 
        className="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain transition-transform group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <span className="sr-only">Visas Colombia</span>
  </Link>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <Logo />
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-brand-navy font-semibold hover:text-brand-accent transition-colors">Inicio</Link>
          <a href="/#visas" className="text-brand-navy font-semibold hover:text-brand-accent transition-colors">Visas de Trabajo</a>
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

const VisaCard = ({ visa }: { visa: Visa }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5"
  >
    <div className="md:w-1/3 h-48 md:h-auto">
      <img src={visa.image} alt={visa.country} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="md:w-2/3 p-8 flex flex-col justify-center">
      <div className="flex items-center gap-2 text-brand-accent mb-3">
        <Briefcase size={18} />
        <span className="text-sm font-bold uppercase tracking-widest">{visa.type}</span>
      </div>
      <h3 className="text-3xl font-bold text-brand-navy mb-4">{visa.country}</h3>
      <p className="text-brand-navy/70 mb-6 leading-relaxed line-clamp-3">{visa.description}</p>
      <Link 
        to={`/visa/${visa.id}`}
        className="self-start border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-2 rounded-full font-bold transition-all"
      >
        Más Información
      </Link>
    </div>
  </motion.div>
);

const LandingPage = ({ visas, loading, error }: { visas: Visa[], loading: boolean, error: string | null }) => (
  <>
    <Hero />
    {/* Visas de Trabajo */}
    <section id="visas" className="py-24 bg-slate-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-navy">Visas de Trabajo</h2>
          <p className="text-brand-navy/70 max-w-2xl mx-auto text-lg">
            Te ayudamos a cumplir tu sueño de trabajar en el exterior. Asesoría completa para procesos migratorios laborales desde Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-navy mx-auto mb-4"></div>
              <p className="text-brand-navy/60">Cargando visas disponibles...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100">
              <p className="text-red-600 font-bold mb-2">¡Ups! Algo salió mal</p>
              <p className="text-red-500/70 text-sm">{error}</p>
            </div>
          ) : visas.length > 0 ? (
            visas.map((visa) => (
              <div key={visa.id}>
                <VisaCard visa={visa} />
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-navy/60">No hay visas disponibles en este momento.</p>
            </div>
          )}
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
  </>
);

const VisaDetailPage = ({ visas }: { visas: Visa[] }) => {
  const { id } = useParams();
  const visa = visas.find(v => v.id === id);

  if (!visa) return <div className="pt-32 text-center text-brand-navy">Visa no encontrada</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-28 pb-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-accent font-bold mb-8 hover:underline">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>

        <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl mb-12">
          <img src={visa.image} alt={visa.country} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
            <span className="text-white/80 uppercase tracking-widest text-sm font-bold mb-2">{visa.type}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white">{visa.country}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Sobre el Programa</h2>
              <p className="text-brand-navy/70 text-lg leading-relaxed">{visa.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Requisitos Principales</h2>
              <ul className="space-y-4">
                {visa.details.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy/70">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={20} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Proceso de Aplicación</h2>
              <div className="space-y-6">
                {visa.details.process.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-brand-navy/70 text-lg pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-navy text-white p-8 rounded-[32px] shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Beneficios</h3>
              <ul className="space-y-4">
                {visa.details.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="text-white shrink-0 mt-1" size={18} />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/573133874608?text=Hola%2C%20quiero%20iniciar%20asesor%C3%ADa%20para%20el%20programa%20de%20visa."
                target="_blank"
                rel="noreferrer noopener"
                className="w-full inline-flex justify-center items-center mt-8 bg-white text-brand-navy py-4 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all"
              >
                Iniciar Asesoría
              </a>
            </div>

            <div className="bg-slate-100 p-8 rounded-[32px]">
              <h3 className="text-xl font-bold text-brand-navy mb-4">¿Tienes dudas?</h3>
              <p className="text-brand-navy/60 text-sm mb-6">Nuestros expertos están listos para ayudarte con tu proceso migratorio.</p>
              <a href="tel:+573001234567" className="flex items-center gap-3 text-brand-navy font-bold hover:text-brand-accent transition-colors">
                <Phone size={20} /> +57 300 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LoginPage = ({ onLogin }: { onLogin: (token: string) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        onLogin(data.token);
        navigate("/admin");
      } else {
        setError(data.message || "Credenciales inválidas");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="pt-40 pb-20 flex justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-black/5">
        <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">Acceso Admin</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Usuario</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              placeholder="admin"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          <button type="submit" className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-accent transition-all">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ visas, onUpdate }: { visas: Visa[], onUpdate: (newVisas: Visa[]) => void }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Visa | null>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  const startEdit = (visa: Visa) => {
    setEditingId(visa.id);
    setEditForm({ ...visa });
  };

  const saveEdit = async () => {
    if (!editForm) return;
    const exists = visas.find(v => v.id === editForm.id);
    const newVisas = exists 
      ? visas.map(v => v.id === editForm.id ? editForm : v)
      : [...visas, editForm];
    
    try {
      const res = await fetch("/api/visas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVisas),
      });
      if (res.ok) {
        onUpdate(newVisas);
        setEditingId(null);
        setEditForm(null);
        alert("Cambios guardados correctamente");
      }
    } catch (err) {
      alert("Error al guardar cambios");
    }
  };

  const deleteVisa = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar esta visa?")) return;
    const newVisas = visas.filter(v => v.id !== id);
    try {
      const res = await fetch("/api/visas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVisas),
      });
      if (res.ok) {
        onUpdate(newVisas);
      }
    } catch (err) {
      alert("Error al eliminar");
    }
  };

  const addNew = () => {
    const newVisa: Visa = {
      id: Date.now().toString(),
      country: "Nuevo País",
      type: "Tipo de Visa",
      image: "https://picsum.photos/seed/new/800/600",
      description: "Descripción breve...",
      details: {
        requirements: ["Requisito 1"],
        benefits: ["Beneficio 1"],
        process: ["Paso 1"]
      }
    };
    startEdit(newVisa);
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-brand-navy">Panel de Administración</h1>
        <div className="flex gap-4">
          <button onClick={addNew} className="bg-green-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-700 transition-all">
            <Plus size={20} /> Nueva Visa
          </button>
          <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-red-600 transition-all">
            <LogOut size={20} /> Salir
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {visas.map(visa => (
          <div key={visa.id} className="bg-white p-6 rounded-2xl shadow-md border border-black/5 flex flex-col md:flex-row gap-6">
            {editingId === visa.id && editForm ? (
              <div className="w-full space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    className="w-full p-2 border rounded" 
                    value={editForm.country} 
                    onChange={e => setEditForm({...editForm, country: e.target.value})}
                    placeholder="País"
                  />
                  <input 
                    className="w-full p-2 border rounded" 
                    value={editForm.type} 
                    onChange={e => setEditForm({...editForm, type: e.target.value})}
                    placeholder="Tipo de Visa"
                  />
                </div>
                <input 
                  className="w-full p-2 border rounded" 
                  value={editForm.image} 
                  onChange={e => setEditForm({...editForm, image: e.target.value})}
                  placeholder="URL de la imagen"
                />
                <textarea 
                  className="w-full p-2 border rounded h-24" 
                  value={editForm.description} 
                  onChange={e => setEditForm({...editForm, description: e.target.value})}
                  placeholder="Descripción"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1 uppercase">Requisitos (uno por línea)</label>
                    <textarea 
                      className="w-full p-2 border rounded h-32 text-sm" 
                      value={editForm.details.requirements.join("\n")} 
                      onChange={e => setEditForm({
                        ...editForm, 
                        details: { ...editForm.details, requirements: e.target.value.split("\n").filter(l => l.trim() !== "") }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1 uppercase">Beneficios (uno por línea)</label>
                    <textarea 
                      className="w-full p-2 border rounded h-32 text-sm" 
                      value={editForm.details.benefits.join("\n")} 
                      onChange={e => setEditForm({
                        ...editForm, 
                        details: { ...editForm.details, benefits: e.target.value.split("\n").filter(l => l.trim() !== "") }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1 uppercase">Proceso (uno por línea)</label>
                    <textarea 
                      className="w-full p-2 border rounded h-32 text-sm" 
                      value={editForm.details.process.join("\n")} 
                      onChange={e => setEditForm({
                        ...editForm, 
                        details: { ...editForm.details, process: e.target.value.split("\n").filter(l => l.trim() !== "") }
                      })}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button onClick={saveEdit} className="bg-brand-navy text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
                    <Save size={18} /> Guardar
                  </button>
                  <button onClick={() => setEditingId(null)} className="bg-gray-200 text-brand-navy px-6 py-2 rounded-full font-bold">
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img src={visa.image} className="w-32 h-32 object-cover rounded-xl" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-navy">{visa.country}</h3>
                  <p className="text-sm text-brand-accent font-bold">{visa.type}</p>
                  <p className="text-sm text-brand-navy/60 mt-2 line-clamp-2">{visa.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={() => startEdit(visa)} className="p-2 text-brand-navy hover:bg-brand-navy/5 rounded-lg transition-all flex items-center gap-2">
                    <Edit size={18} /> Editar
                  </button>
                  <button onClick={() => deleteVisa(visa.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all flex items-center gap-2">
                    <Trash2 size={18} /> Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = ({ isAdmin }: { isAdmin?: boolean }) => (
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
          <li><Link to="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
          <li><a href="/#visas" className="hover:text-brand-accent transition-colors">Visas de Trabajo</a></li>
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
        <div className="mt-8 pt-4 border-t border-black/5">
          {isAdmin ? (
            <Link to="/admin" className="text-brand-accent font-bold text-xs hover:underline">Panel de Administración</Link>
          ) : (
            <Link to="/login" className="text-brand-navy/20 hover:text-brand-navy transition-colors text-[10px] uppercase tracking-widest">Acceso Administrativo</Link>
          )}
        </div>
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
);

export default function App() {
  const [visas, setVisas] = useState<Visa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("adminToken"));

  useEffect(() => {
    fetchVisas();
  }, []);

  const fetchVisas = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/visas");
      if (!res.ok) throw new Error(`Error del servidor: ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setVisas(data);
      } else {
        throw new Error("Formato de datos inválido");
      }
    } catch (err: any) {
      console.error("Error fetching visas:", err);
      setError(err.message || "No se pudieron cargar las visas");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (newToken: string) => {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fcfcfc]">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage visas={visas} loading={loading} error={error} />} />
          <Route path="/visa/:id" element={<VisaDetailPage visas={visas} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route 
            path="/admin" 
            element={token ? <AdminDashboard visas={visas} onUpdate={setVisas} /> : <Navigate to="/login" />} 
          />
        </Routes>
        <Footer isAdmin={!!token} />
      </div>
    </BrowserRouter>
  );
}
