"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-secondary text-text">
      {/* Header */}
      <motion.header
        className="flex flex-col items-center justify-center py-10 text-center bg-primary text-light"
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
        <h1 className="text-2xl font-bold">
          Estudio Jurídico Adrián Gustavo Guidi
        </h1>
      </motion.header>

      {/* Bienvenida */}
      <motion.section
        className="px-4 py-12 text-center max-w-3xl mx-auto bg-light shadow-md rounded-xl mt-[-2rem] z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold text-primary mb-4">Bienvenidos</h2>
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
        className="px-4 py-12 bg-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold text-center text-primary mb-6">
          Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              nombre: "Derecho Civil y Comercial",
              descripcion: "",
            },
            {
              nombre: "Sucesiones",
              descripcion: "",
            },
            { nombre: "Accidentes de tránsito", descripcion: "" },
            {
              nombre: "Infracciones de tránsito",
              descripcion: "Restitución de licencia",
            },
            {
              nombre: "Daños y Perjuicios",
              descripcion: "",
            },
            {
              nombre: "Juicios Ejecutivos",
              descripcion: "",
            },
            {
              nombre: "Desalojos",
              descripcion: "",
            },
            {
              nombre: "Contratos",
              descripcion: "",
            },
            {
              nombre: "Divorcios y uniones convivenciales",
              descripcion: "",
            },
            {
              nombre: "Cuota alimentaria",
              descripcion: "",
            },
            {
              nombre: "Impedimento de contacto",
              descripcion: "",
            },
            {
              nombre: "Régimen de comunicación",
              descripcion: "",
            },
            {
              nombre: "Cuidado personal",
              descripcion: "",
            },
            {
              nombre: "Filiación",
              descripcion: "",
            },
            {
              nombre: "Adopción",
              descripcion: "",
            },
            {
              nombre: "Responsabilidad parental",
              descripcion: "",
            },
            {
              nombre: "Accidentes de trabajo",
              descripcion: "",
            },
            {
              nombre: "Enfermedades Profesionales",
              descripcion: "",
            },
            {
              nombre: "Indemnizaciones por despido",
              descripcion: "",
            },
            {
              nombre: "Reclamos laborales en general",
              descripcion: "",
            },
            {
              nombre: "Causas Federales",
              descripcion: "",
            },
          ].map((servicio) => (
            <motion.div
              key={servicio.nombre}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 gap-1 p-3 h-[10dvh]">
                <div className="text-center font-medium text-text">
                  {servicio.nombre}
                </div>
                <div className="text-center font-medium text-black/50 text-sm">
                  {servicio.descripcion}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section
        className="px-4 py-12 text-center bg-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl font-semibold text-primary mb-6">Contacto</h2>
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
        &copy; {new Date().getFullYear()} Estudio Jurídico Adrián Gustavo Guidi
      </footer>
    </main>
  );
}
