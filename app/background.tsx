"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Footer from "./footer";
import { useRouter } from 'next/navigation';


interface HomeProps {
  children: ReactNode;
}

export default function Home({ children }: HomeProps) {  
  const [contactoButton, setContacto] = useState(false);
  const [serviciosButton, setServicios] = useState(false);
  const [inicioButton, setInicio] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>("inicio");
  const router = useRouter()

  useEffect(() => {
    setCurrentPage(router.pathname); // Actualiza currentPage cuando cambie la URL
  }, [router.pathname]);
  
  function handleServiciosButton(): void {
      setContacto(false);
      setInicio(false);
      setServicios(true);
      setCurrentPage("servicio");
      router.push('/services');
  }

  function handleContactoButton(): void {
      setServicios(false);
      setInicio(false);
      setContacto(true);
      setCurrentPage("contacto");
      router.push('/contact')
      
  }

  function handleInicioButton(): void {
      setServicios(false);
      setContacto(false);
      setInicio(true);
      setCurrentPage("inicio");
      router.push('/')
  }

  return (

      <div className="max-w-full max-h-full bg-white">
        <nav className="navbar bg-body-tertiary bg-white">
              <div className="container-fluid">
                  <img src={"/AGLogo.png"} alt="Logo"  height={150} width={200}  className="" />
              </div>
        </nav>
        <div className="contenedor3">
            <div className="contenedor3v2">
                <Breadcrumbs underline="active" onAction={() => handleInicioButton()}>
                    <BreadcrumbItem key="inicio" isCurrent={currentPage === "inicio"}>
                        <h2 className="h2">Inicio</h2>
                    </BreadcrumbItem>
                    {contactoButton && (
                        <BreadcrumbItem key="contacto" isCurrent={currentPage === "contacto"}>
                           <h2 className="h2">Contacto</h2> 
                        </BreadcrumbItem>
                    )}
                    {serviciosButton && (
                        <BreadcrumbItem key="servicio" isCurrent={currentPage === "servicio"}>
                           <h2 className="h2">Servicios</h2>
                        </BreadcrumbItem>
                    )}
                </Breadcrumbs>
            </div>
        </div>

        {children}

        
        <div className="flex gap-4 items-center">
          <div className="contenedor2 flex">
            <div className="columna2 flex-1">
              <Button variant="light" size="lg" className="botonColumna" radius="none" onClick={() => handleContactoButton()}>
                Contacto
              </Button>
            </div>
            <div className="columna3 flex-1">
              <Button variant="light" size="lg" className="botonColumna" radius="none" onClick={() => handleServiciosButton()}>
                Servicios
              </Button>
            </div>
          </div>
        </div>

        <Footer></Footer>
    </div>
  )
}
