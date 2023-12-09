"use client";
import React, { useState } from "react";
import { Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Footer from "../footer";
import { Fade } from "react-awesome-reveal"; 
import NextJsCarousel from "./carousel";
import Image from 'next/image'


export default function HomePage() {
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
    <>
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
            <div className="columna">
                <NextJsCarousel></NextJsCarousel>
            </div>
            {contactoButton && (
                <div className="columna"> Contacto </div>
            )}
            {serviciosButton && (
                <div className="columna"> Servicios </div>
            )}
            {inicioButton && (
                <div className="columna text-black">
                    <div className="columna4">
                        <Fade duration={5000}> 
                            <h1 className="h1">Bienvenidos al Despacho Legal de Adrián Gustavo Guidi</h1> 
                        </Fade> 
                    </div>
                    <Fade duration={7000}>
                        <div className="columna4">
                            <h2 className="h2">
                                Es un honor darle la bienvenida a mi despacho legal. Soy Adrián Gustavo Guidi,  
                                abogado comprometido con la asesoría legal de calidad y el servicio a la comunidad.
                            </h2>
                            <h2 className="h2">
                                Además de dirigir mi propio estudio legal, tengo el privilegio de colaborar en un consultorio 
                                gratuito del Colegio de Abogados de Bahía Blanca, donde he tenido el honor de ayudar 
                                a numerosas personas en situaciones legales diversas.
                            </h2>
                            <h2 className="h2">
                                Mi compromiso es ofrecer un servicio legal comprensivo, ético y profesional a cada cliente. 
                                En mi despacho, cada caso recibe una atención cercana y dedicada, ya que creo firmemente en la importancia de 
                                comprender las necesidades individuales de quienes confían en mis servicios legales.
                            </h2>
                            <h2 className="h2">
                                Gracias por considerar mi despacho para sus necesidades legales. Espero poder brindarle la ayuda que necesita.
                            </h2>
                            <h2 className="h2">
                                Atentamente, 
                            </h2>
                            <h2 className="h2">
                                Adrián Gustavo Guidi
                            </h2>
                        </div>
                    </Fade>
                    
                </div>
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
  </>
  );
}
