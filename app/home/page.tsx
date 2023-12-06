"use client";
import React from "react";
import {Navbar, NavbarBrand, Avatar, Button} from "@nextui-org/react";
import Footer from "../footer";


export default function HomePage() {
  return (
    <>
        <Navbar className="navbar">
        <NavbarBrand className="gap-5">
            <Avatar
                size="lg"
                radius="full"
                src={"/logo-estudio.png"}
            />
            <p className="font-bold text-inherit">Estudio Adrian Gustavo Guidi</p>
        </NavbarBrand>
        </Navbar>
        <div className="contenedor">
            <div className="columna">
                ¡Bienvenido al Despacho Legal de Adrián Gustavo Guidi!

                Es un honor darle la bienvenida a mi despacho legal. Soy Adrián Gustavo Guidi,  abogado comprometido con la asesoría legal de calidad y el servicio a la comunidad.

                Además de dirigir mi propio estudio legal, tengo el privilegio de colaborar en un consultorio gratuito del Colegio de Abogados de Bahía Blanca, donde he tenido el honor de ayudar a numerosas personas en situaciones legales diversas.

                Mi compromiso es ofrecer un servicio legal comprensivo, ético y profesional a cada cliente. En mi despacho, cada caso recibe una atención cercana y dedicada, ya que creo firmemente en la importancia de comprender las necesidades individuales de quienes confían en mis servicios legales.

                Gracias por considerar mi despacho para sus necesidades legales. Espero poder brindarle la ayuda que necesita.

                Atentamente,

                Adrián Gustavo Guidi
            </div>
            <div className="columna">
               Aca va foto
            </div>
        </div>
        <div className="flex gap-4 items-center">
            <div className="contenedor2 flex">
                <div className="columna2 flex-1">
                    <Button variant="light" size="lg" className="botonColumna" radius="none">
                        Contacto
                    </Button> 
                </div>
                <div className="columna3 flex-1">
                    <Button variant="light" size="lg" className="botonColumna" radius="none">
                        Servicios
                    </Button> 
                </div>
            </div>
        </div>
        <Footer></Footer>
  </>
  );
}
