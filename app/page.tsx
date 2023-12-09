"use client";
import React, { useState } from "react";
import { Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Footer from "./footer";
import { Fade } from "react-awesome-reveal"; 
import Image from 'next/image'
import HomePage from "./home/page";
import Contacto from "./contact/page";
import Servicios from "./services/page";



export default function Home() {
  const [contactoButton, setContacto] = useState(false);
  const [serviciosButton, setServicios] = useState(false);
  const [inicioButton, setInicio] = useState(true);
  const [currentPage, setCurrentPage] = React.useState<React.Key>("inicio");

  function handleServiciosButton(): void {
      setContacto(false);
      setInicio(false);
      setServicios(true);
      setCurrentPage("servicio");
  }

  function handleContactoButton(): void {
      setServicios(false);
      setInicio(false);
      setContacto(true);
      setCurrentPage("contacto");
  }

  function handleInicioButton(): void {
      setServicios(false);
      setContacto(false);
      setInicio(true);
      setCurrentPage("inicio");
  }


  return (

      <div className="max-w-full max-h-full bg-white">
        <nav className="navbar bg-body-tertiary bg-white">
              <div className="container-fluid">
                  <img src={"/logo-2.png"} alt="Logo"  height="10"  className="" />
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

        {inicioButton && (
          <HomePage></HomePage>
        )}

        {contactoButton && (
          <Contacto></Contacto>
        )}

        {serviciosButton && (
          <Servicios></Servicios>
        )}
        
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
