"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";

const serviciosData = [
  { nombre: "Sucesiones", descripcion: "" },
  { nombre: "Usucapión", descripcion: "" },
  { nombre: "Accidentes de tránsito", descripcion: "" },
  {
    nombre: "Infracciones de tránsito",
    descripcion: "Restitución de licencia",
  },
  { nombre: "Daños y Perjuicios", descripcion: "" },
  { nombre: "Juicios Ejecutivos", descripcion: "" },
  { nombre: "Desalojos", descripcion: "" },
  { nombre: "Contratos", descripcion: "" },
  { nombre: "Divorcios y uniones convivenciales", descripcion: "" },
  { nombre: "Cuota alimentaria", descripcion: "" },
  { nombre: "Impedimento de contacto", descripcion: "" },
  { nombre: "Régimen de comunicación", descripcion: "" },
  { nombre: "Cuidado personal", descripcion: "" },
  { nombre: "Filiación", descripcion: "" },
  { nombre: "Adopción", descripcion: "" },
  { nombre: "Responsabilidad parental", descripcion: "" },
  { nombre: "Accidentes de trabajo", descripcion: "" },
  { nombre: "Enfermedades Profesionales", descripcion: "" },
  { nombre: "Indemnizaciones por despido", descripcion: "" },
  { nombre: "Reclamos laborales en general", descripcion: "" },
  { nombre: "Amparos de salud", descripcion: "" },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary text-text">
      {/* Header */}
      <motion.header
        className="flex flex-col items-center justify-center py-10 text-center bg-gradient-to-br from-primary/90 via-slate-900 to-slate-900 text-light shadow-[0_32px_80px_rgba(15,23,42,0.45)] relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/AGLogo.png"
          alt="Logo AG"
          width={150}
          height={150}
          className="mb-4 invert"
        />
        <div className="text-sm uppercase tracking-[0.2em] text-white bg-white/20 rounded-full px-6 py-1 mb-3">
          Estudio Jurídico
        </div>
      </motion.header>

      {/* Bienvenida */}
      <motion.section
        className="px-4 py-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-white to-slate-100 shadow-xl rounded-2xl mt-[-2rem] z-10 relative border border-primary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-primary mb-4 inline-flex items-center justify-center gap-2">
          <span className="px-4 py-1 rounded-full bg-accent/15 text-accent shadow-sm">
            Bienvenidos
          </span>
        </h2>
        <p className="text-base leading-relaxed">
          Es un honor darle la bienvenida a mi despacho legal. Soy Adrián
          Gustavo Guidi, abogado comprometido con la asesoría legal de calidad y
          el servicio a la comunidad.
        </p>
        <p className="text-base leading-relaxed mt-4">
          Mi compromiso es ofrecer un servicio legal comprensivo, ético y
          profesional.
        </p>
        <p className="text-base leading-relaxed mt-4">
          Gracias por considerar mi despacho para sus necesidades legales.
          Espero poder brindarle la ayuda que necesita.
        </p>
        <p className="mt-6 font-semibold text-accent">
          Atentamente,
          <br />
          Adrián Gustavo Guidi
        </p>
      </motion.section>

      {/* Servicios */}
      <motion.section
        className="px-4 py-12 bg-gradient-to-b from-secondary to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-semibold text-center text-primary">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/30 shadow-inner">
              Servicios
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {serviciosData.map((servicio) => (
            <motion.div
              key={servicio.nombre}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition-all duration-300 p-5 min-h-[10dvh] bg-gradient-to-br from-white via-slate-50 to-white border border-transparent hover:border-accent/60 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
                <div className="text-center font-semibold text-text mb-1 text-lg">
                  {servicio.nombre}
                </div>
                <div className="text-center text-black/60 text-sm min-h-[1.75rem]">
                  {servicio.descripcion || ""}
                </div>
                <div className="mt-3 h-1 w-14 mx-auto rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-20"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section
        className="px-4 py-12 text-center bg-gradient-to-br from-white to-slate-100 rounded-2xl mx-4 md:mx-10 border border-primary/20 shadow-md mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold text-primary mb-6">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
            Contacto
          </span>
        </h2>
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <p className="text-sm font-semibold uppercase text-text">
              Dirección
            </p>
            <p>Bahía Blanca, Alsina 35, Piso 7, Oficina 4</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-text">Email</p>
            <p>estudioadrianguidi@gmail.com</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-text">
              Días y Horarios
            </p>
            <p>Lunes a Jueves de 17 a 20hs</p>
          </div>
        </div>
      </motion.section>

      <footer className="text-center text-sm text-text py-6 bg-secondary border-t border-gray-300">
        developed by Giuliana Guidi
      </footer>
    </main>
  );
}
