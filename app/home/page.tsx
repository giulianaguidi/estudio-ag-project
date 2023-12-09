"use client";
import React, { useState } from "react";
import {Button, Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Footer from "../footer";
import { Fade,Bounce,Flip } from "react-awesome-reveal"; 
import NextJsCarousel from "./carousel";


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
                <img src={"/logo-2.png"} alt="Logo"  height="10" className=""/>
            </div>
        </nav>
        <div className="contenedor3">
            <div className="contenedor3v2">
                <Breadcrumbs underline="active" onAction={() => handleInicioButton()}>
                    <BreadcrumbItem key="inicio" isCurrent={currentPage === "inicio"}>
                        Inicio
                    </BreadcrumbItem>
                    {contactoButton && (
                        <BreadcrumbItem key="contacto" isCurrent={currentPage === "contacto"}>
                            Contacto
                        </BreadcrumbItem>
                    )}
                    {serviciosButton && (
                        <BreadcrumbItem key="servicio" isCurrent={currentPage === "servicio"}>
                            Servicios
                        </BreadcrumbItem>
                    )}
                </Breadcrumbs>
            </div>
        </div>
        <div className="contenedor bg-black">
            {contactoButton && (
                <div className="columna text-white"> Contacto </div>
            )}
            {serviciosButton && (
                <div className="columna text-white"> Servicios </div>
            )}
            {inicioButton && (
                <div className="columna text-white">
                    <Fade duration={5000}> 
                        <h1 className="h1">Bienvenidos al Despacho Legal de Adrián Gustavo Guidi</h1> 
                    </Fade> 
                    <Fade duration={7000}>
                        <span>
                            Es un honor darle la bienvenida a mi despacho legal. Soy Adrián Gustavo Guidi,  abogado comprometido con la asesoría legal de calidad y el servicio a la comunidad.

                            Además de dirigir mi propio estudio legal, tengo el privilegio de colaborar en un consultorio gratuito del Colegio de Abogados de Bahía Blanca, donde he tenido el honor de ayudar a numerosas personas en situaciones legales diversas.

                            Mi compromiso es ofrecer un servicio legal comprensivo, ético y profesional a cada cliente. En mi despacho, cada caso recibe una atención cercana y dedicada, ya que creo firmemente en la importancia de comprender las necesidades individuales de quienes confían en mis servicios legales.

                            Gracias por considerar mi despacho para sus necesidades legales. Espero poder brindarle la ayuda que necesita.

                            Atentamente,

                            Adrián Gustavo Guidi
                        </span>
                    </Fade>
                    
                </div>
            )}
            <div className="columna">
                <NextJsCarousel></NextJsCarousel>
            </div>             
        </div>
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
