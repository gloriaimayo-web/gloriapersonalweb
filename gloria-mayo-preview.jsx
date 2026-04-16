import { useMemo, useState } from "react";
import { Mail, MapPin, Phone, Globe, Briefcase, Leaf, Scissors, ExternalLink, ChevronRight } from "lucide-react";

export default function GloriaPersonalBrandWebsiteMockup() {
  const [lang, setLang] = useState("es");

  const content = useMemo(
    () => ({
      es: {
        nav: [
          ["inicio", "Inicio"],
          ["sobre-mi", "Sobre mí"],
          ["servicios", "Servicios"],
          ["proyectos", "Proyectos"],
          ["pasiones", "Pasiones"],
          ["contacto", "Contacto"],
        ],
        role: "Especialista en Soluciones Digitales para Negocios Locales",
        heroBadge: "Bilingüe · Tecnología · Negocios locales · Marca personal",
        heroTitle: "Transformo experiencia, creatividad y disciplina en soluciones digitales con identidad propia.",
        heroText:
          "Soy Ingeniera de Sistemas, creadora y dueña de G&L Services Group en Canadá. Desarrollo páginas web, sistemas de reservas, CRM y automatización para negocios locales, con una visión humana, estratégica y orientada a resultados.",
        ctaPrimary: "Ver proyectos",
        ctaSecondary: "Contáctame",
        stats: [
          ["15+ años", "en sistemas, soporte, calidad y gestión digital"],
          ["Desde sep 2022", "experiencia actual en Costco Canadá"],
          ["G&L Services Group", "empresa propia creada en Canadá"],
          ["Proyectos reales", "Vaughan Sewing, Appointly y Vivir Ligero"],
        ],
        profileCardTitle: "Perfil actual",
        profileCardText:
          "Ingeniera de Sistemas, empresaria digital y profesional activa en Costco. Combino estructura operativa, sensibilidad estética y ejecución práctica.",
        aboutTitle: "Sobre mí",
        aboutText:
          "Tengo más de 15 años de experiencia en soporte técnico, administración de plataformas, calidad de software y gestión de proyectos digitales. Hoy vivo en Canadá, donde además de trabajar en Costco desde septiembre 29 de 2022, he seguido construyendo proyectos propios con una mirada profesional, cercana y enfocada en soluciones reales. Mi marca integra trayectoria técnica, disciplina operativa y un estilo personal elegante y humano.",
        servicesTitle: "Servicios",
        services: [
          { title: "Páginas web con identidad", text: "Sitios visualmente elegantes, claros y estratégicos para marcas personales y negocios locales." },
          { title: "Sistemas de reservas online", text: "Implementación de booking para servicios con formularios, disponibilidad y mejor experiencia del cliente." },
          { title: "CRM y automatización", text: "Organización de clientes, recordatorios, seguimiento comercial y procesos más ordenados." },
          { title: "Optimización digital", text: "Análisis y mejora de procesos para ahorrar tiempo, proyectar mejor la marca y crecer con orden." },
        ],
        projectsTitle: "Proyectos destacados",
        projects: [
          { name: "G&L Services Group", category: "Empresa en Canadá", text: "Mi empresa propia, enfocada en soluciones digitales para negocios y proyectos con identidad clara.", cta: "Espacio para logo o imagen de marca" },
          { name: "Vaughan Sewing", category: "Negocio local · Canadá", text: "Marca orientada a costura y servicio personalizado, con una estética elegante y cercana.", cta: "Espacio para captura de la web o imagen principal" },
          { name: "Appointly", category: "Producto digital", text: "Plataforma de reservas y CRM pensada para ayudar a negocios locales a organizar su operación.", cta: "Espacio para screenshot del sistema" },
          { name: "Vivir Ligero", category: "Proyecto web · Medellín", text: "Nueva página web lista para publicar, vinculada a bienestar, estilo de vida y comunicación visual limpia.", cta: "Espacio para imagen de portada del proyecto" },
        ],
        passionsTitle: "Lo que me apasiona en mi tiempo libre",
        passionsText:
          "La costura y el cuidado de plantas hacen parte de mi vida personal y de mi forma de entender el trabajo bien hecho. La costura representa precisión, detalle y transformación; las plantas, paciencia, constancia y cuidado. Estas pasiones enriquecen mi marca porque muestran que detrás de la tecnología también hay sensibilidad, gusto estético y dedicación.",
        passions: [
          ["Costura", "Espacio para foto trabajando, telas o piezas terminadas"],
          ["Plantas", "Espacio para foto personal con plantas o jardín"],
        ],
        experienceTitle: "Experiencia que fortalece mi marca",
        experienceItems: [
          "Ingeniería de Sistemas y trayectoria profesional en proyectos tecnológicos.",
          "Creadora y dueña de G&L Services Group en Canadá.",
          "Trabajo actual en Costco desde septiembre 29 de 2022, en un entorno de alta exigencia y estándares operativos.",
          "Desarrollo de proyectos reales como Vaughan Sewing, Appointly y Vivir Ligero.",
        ],
        contactTitle: "Contacto",
        contactText: "Disponible para colaboraciones, desarrollo de páginas web, soluciones digitales y proyectos para negocios locales.",
        footerText: "Todos los derechos reservados.",
      },
      en: {
        nav: [
          ["inicio", "Home"],
          ["sobre-mi", "About"],
          ["servicios", "Services"],
          ["proyectos", "Projects"],
          ["pasiones", "Passions"],
          ["contacto", "Contact"],
        ],
        role: "Digital Solutions Specialist for Local Businesses",
        heroBadge: "Bilingual · Technology · Local business · Personal brand",
        heroTitle: "I turn experience, creativity, and discipline into digital solutions with a strong personal identity.",
        heroText:
          "I am a Systems Engineer and founder of G&L Services Group in Canada. I build websites, booking systems, CRM workflows, and automation for local businesses with a human, strategic, and results-driven approach.",
        ctaPrimary: "View projects",
        ctaSecondary: "Contact me",
        stats: [
          ["15+ years", "in systems, support, quality, and digital management"],
          ["Since Sep 2022", "current experience at Costco Canada"],
          ["G&L Services Group", "company founded in Canada"],
          ["Real projects", "Vaughan Sewing, Appointly, and Vivir Ligero"],
        ],
        profileCardTitle: "Current profile",
        profileCardText: "Systems Engineer, digital entrepreneur, and active Costco professional. I combine operational structure, aesthetic sensitivity, and practical execution.",
        aboutTitle: "About me",
        aboutText:
          "I have more than 15 years of experience in technical support, platform administration, software quality, and digital project management. Today I live in Canada, where in addition to working at Costco since September 29, 2022, I have continued building my own projects with a professional, warm, and solution-oriented perspective. My brand combines technical background, operational discipline, and an elegant, human style.",
        servicesTitle: "Services",
        services: [
          { title: "Websites with identity", text: "Elegant, clear, and strategic websites for personal brands and local businesses." },
          { title: "Online booking systems", text: "Booking implementation for service businesses with forms, availability, and a better customer experience." },
          { title: "CRM and automation", text: "Customer organization, reminders, follow-up flows, and more structured operations." },
          { title: "Digital optimization", text: "Process analysis and improvement to save time, strengthen your brand, and grow with structure." },
        ],
        projectsTitle: "Featured projects",
        projects: [
          { name: "G&L Services Group", category: "Company in Canada", text: "My own company, focused on digital solutions for businesses and brand-led projects.", cta: "Space for logo or brand image" },
          { name: "Vaughan Sewing", category: "Local business · Canada", text: "A sewing and personalized service brand with an elegant and approachable aesthetic.", cta: "Space for website screenshot or hero image" },
          { name: "Appointly", category: "Digital product", text: "A booking and CRM platform designed to help local businesses organize their operations.", cta: "Space for system screenshot" },
          { name: "Vivir Ligero", category: "Website project · Medellín", text: "A newly finished website linked to wellbeing, lifestyle, and clean visual communication.", cta: "Space for project cover image" },
        ],
        passionsTitle: "What I love in my free time",
        passionsText:
          "Sewing and plant care are part of my personal life and my way of understanding meaningful work. Sewing represents precision, detail, and transformation; plants reflect patience, consistency, and care. These passions enrich my brand because they show that behind technology there is also sensitivity, aesthetic taste, and dedication.",
        passions: [
          ["Sewing", "Space for a photo working with fabrics or finished pieces"],
          ["Plants", "Space for a personal photo with plants or garden"],
        ],
        experienceTitle: "Experience that strengthens my brand",
        experienceItems: [
          "Systems Engineering and professional experience in technology projects.",
          "Founder and owner of G&L Services Group in Canada.",
          "Current Costco role since September 29, 2022, in a high-demand operational environment.",
          "Development of real projects such as Vaughan Sewing, Appointly, and Vivir Ligero.",
        ],
        contactTitle: "Contact",
        contactText: "Available for collaborations, website development, digital solutions, and projects for local businesses.",
        footerText: "All rights reserved.",
      },
    }),
    []
  );

  const t = content[lang];

  const Placeholder = ({ label, sublabel, tall = false }) => (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-dashed border-[#b8898f] bg-[#f7efef] ${tall ? "min-h-[280px]" : "min-h-[220px]"}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),rgba(184,137,143,0.08),rgba(255,255,255,0.4))]" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 py-8 text-center">
        <div className="mb-3 rounded-full border border-[#c59aa0] bg-white/80 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-[#8e4d56]">Foto</div>
        <div className="max-w-xs text-lg font-medium text-[#7b3d45]">{label}</div>
        <div className="mt-3 max-w-sm text-sm leading-7 text-slate-500">{sublabel}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fbf6f3,white_34%,#f8fafc_72%)] text-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }
        .script-name { font-family: 'Great Vibes', cursive; letter-spacing: 0.5px; }
      `}</style>

      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="script-name text-4xl leading-none text-[#8a3f4c] md:text-5xl">Gloria Mayo</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.35em] text-slate-500 md:text-xs">{t.role}</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {t.nav.map(([href, label]) => (
              <a key={href} href={`#${href}`} className="text-sm text-slate-600 transition hover:text-[#8a3f4c]">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-[#e9d7da] bg-[#fff8f8] p-1 shadow-sm">
            <button onClick={() => setLang("es")} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${lang === "es" ? "bg-[#8a3f4c] text-white" : "text-slate-600"}`}>ES</button>
            <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${lang === "en" ? "bg-[#8a3f4c] text-white" : "text-slate-600"}`}>EN</button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20">
          <div className="self-center">
            <div className="mb-5 inline-flex rounded-full border border-[#ead6d9] bg-[#fff7f7] px-4 py-2 text-xs font-medium text-[#8a3f4c] shadow-sm">{t.heroBadge}</div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#proyectos" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5">
                {t.ctaPrimary} <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#contacto" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">{t.ctaSecondary}</a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.stats.map(([value, label]) => (
                <div key={value} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-semibold text-slate-900">{value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <Placeholder label="Espacio para foto profesional principal" sublabel="Ideal para tu retrato elegante: fondo limpio, luz suave, vestimenta neutra y presencia cálida." tall />
            <div className="rounded-[2rem] border border-white bg-white/90 p-5 shadow-xl shadow-slate-200/60">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{t.profileCardTitle}</div>
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#f5e9ea] via-[#fffdfb] to-[#eef5f2] p-5">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4 text-[#8a3f4c]" /> Vaughan, Ontario, Canada</div>
                <div className="text-2xl font-semibold text-slate-900">Tecnología + creatividad + servicio</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{t.profileCardText}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
              <div className="text-sm uppercase tracking-[0.25em] text-[#d7b4ba]">{t.aboutTitle}</div>
              <p className="mt-5 text-base leading-8 text-slate-200">{t.aboutText}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white"><Briefcase className="h-4 w-4 text-[#d7b4ba]" /> Costco</div>
                  <div className="text-sm leading-7 text-slate-300">Experiencia actual en Canadá dentro de un entorno operativo exigente y estructurado.</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white"><Globe className="h-4 w-4 text-[#d7b4ba]" /> G&L Services Group</div>
                  <div className="text-sm leading-7 text-slate-300">Base empresarial para consolidar tu portafolio, marca y servicios digitales.</div>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-400">{t.experienceTitle}</div>
              <div className="space-y-4">
                {t.experienceItems.map((item) => (
                  <div key={item} className="rounded-[1.25rem] bg-slate-50 p-4 text-sm leading-7 text-slate-700">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-400">{t.servicesTitle}</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {t.services.map((service) => (
                <div key={service.title} className="rounded-[1.5rem] bg-slate-50 p-5">
                  <div className="text-lg font-semibold text-slate-900">{service.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{service.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[2.25rem] bg-gradient-to-r from-[#58262d] via-slate-900 to-slate-800 p-8 text-white md:p-10">
            <div className="text-sm uppercase tracking-[0.25em] text-[#d7b4ba]">{t.projectsTitle}</div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {t.projects.map((project, idx) => (
                <div key={project.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="p-5"><Placeholder label={project.name} sublabel={project.cta} /></div>
                    <div className="p-6">
                      <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#d7b4ba]">0{idx + 1} · {project.category}</div>
                      <div className="text-2xl font-semibold">{project.name}</div>
                      <div className="mt-3 text-sm leading-7 text-slate-200">{project.text}</div>
                      <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15">
                        Ver detalle <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pasiones" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400">{t.passionsTitle}</div>
              <p className="mt-5 text-base leading-8 text-slate-600">{t.passionsText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[lang === "es" ? "Costura" : "Sewing", lang === "es" ? "Plantas" : "Plants", lang === "es" ? "Creatividad" : "Creativity", lang === "es" ? "Disciplina" : "Discipline", lang === "es" ? "Detalle" : "Detail"].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#f6ebec] px-4 py-2 text-sm text-[#8a3f4c]">{tag}</span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.passions.map(([title, desc]) => (
                  <div key={title} className="rounded-[1.5rem] border border-slate-200 p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                      {title.toLowerCase().includes("cost") || title.toLowerCase().includes("sew") ? <Scissors className="h-4 w-4 text-[#8a3f4c]" /> : <Leaf className="h-4 w-4 text-[#8a3f4c]" />}
                      {title}
                    </div>
                    <Placeholder label={title} sublabel={desc} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#f9f1f1] via-white to-[#eef6f1] p-8 shadow-sm">
              <div className="grid h-full gap-4">
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">Imagen de marca</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">Elegante, femenina, profesional y cálida. La tipografía de tu nombre toma inspiración visual del estilo que te gusta en Vaughan Sewing.</div>
                </div>
                <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">Uso estratégico de imágenes</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">Aquí la fotografía sí es necesaria: una foto profesional tuya, imágenes de proyectos y dos imágenes personales bien cuidadas para humanizar la marca.</div>
                </div>
                <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white shadow-sm">
                  <div className="text-sm font-semibold">Dirección visual</div>
                  <div className="mt-2 text-sm leading-7 text-slate-200">Fondo claro, detalles rosados vino, mucho aire visual, secciones limpias y sensación premium sin recargar la página.</div>
                </div>
                <Placeholder label={lang === "es" ? "Espacio para collage visual de marca" : "Space for personal brand collage"} sublabel={lang === "es" ? "Puede incluir detalle de costura, escritorio, pantalla web, plantas y un retrato secundario." : "Can include sewing details, desk setup, website screen, plants, and a secondary portrait."} tall />
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:flex md:items-center md:justify-between md:gap-10">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400">{t.contactTitle}</div>
              <div className="mt-3 max-w-2xl text-base leading-8 text-slate-600">{t.contactText}</div>
              <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#8a3f4c]" /> givone@hotmail.com</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#8a3f4c]" /> +1 437-677-9018</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#8a3f4c]" /> Vaughan, Ontario, Canada</div>
                <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-[#8a3f4c]" /> G&amp;L Services Group</div>
              </div>
            </div>
            <a href="mailto:givone@hotmail.com" className="mt-6 inline-flex rounded-2xl bg-[#8a3f4c] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#8a3f4c]/20 md:mt-0">{t.ctaSecondary}</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center lg:flex-row lg:px-10 lg:text-left">
          <div>
            <div className="script-name text-3xl text-[#8a3f4c]">Gloria Mayo</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">G&amp;L Services Group</div>
          </div>
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Gloria Ivone Mayo Arango · G&amp;L Services Group. {t.footerText}</div>
        </div>
      </footer>
    </div>
  );
}
