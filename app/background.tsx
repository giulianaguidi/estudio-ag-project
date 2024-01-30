"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Footer from "./footer";
import { useRouter, usePathname } from 'next/navigation';
import {HomeIcon} from "./HomeIcon";


interface HomeProps {
  children: ReactNode;
}

export default function Home({ children }: HomeProps) {  
  const [contactoButton, setContacto] = useState(false);
  const [serviciosButton, setServicios] = useState(false);
  const [inicioButton, setInicio] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>("inicio");
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setCurrentPage(pathname);
    if (pathname === '/contact') {
      setContacto(true);
      setInicio(false);
      setServicios(false);
    } else if (pathname === '/services') {
      setContacto(false);
      setInicio(false);
      setServicios(true);
    } else if (pathname === '/') {
      setInicio(true);
      setContacto(false);
      setServicios(false);
    }
  }, [pathname]);
  
  function handleServiciosButton(): void {
      setContacto(false);
      setInicio(false);
      setServicios(true);
      setCurrentPage("services");
      router.push('/services');
  }

  function handleContactoButton(): void {
      setServicios(false);
      setInicio(false);
      setContacto(true);
      setCurrentPage("contact");
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

      <div className="containerLayout">
        <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                  <img src={"/AGLogo.png"} alt="Logo"  height={150} width={200}  className="" />
              </div>
        </nav>
        <div className="contenedor3">
            <div className="contenedor3v2">
                <Breadcrumbs color="primary" variant="light" underline="active" onAction={() => handleInicioButton()}>
                    <BreadcrumbItem key="inicio" isCurrent={currentPage === "inicio"} startContent={<HomeIcon />}>
                        <h2 className="h2">Inicio</h2>
                    </BreadcrumbItem>
                    {contactoButton && (
                        <BreadcrumbItem key="contacto" isCurrent={currentPage === "contact"}>
                           <h2 className="h2">Contacto</h2> 
                        </BreadcrumbItem>
                    )}
                    {serviciosButton && (
                        <BreadcrumbItem key="servicio" isCurrent={currentPage === "services"}>
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
