"use client";
import React from "react";
import {Navbar, NavbarBrand, Avatar, Button, Image} from "@nextui-org/react";
import Footer from "../footer";
import 'bootstrap/dist/css/bootstrap.css'



export default function HomePage() {
  return (
    <>
    <div className="max-w-full max-h-full bg-black">
        <nav className="navbar bg-body-tertiary bg-white">
            <div className="container-fluid">
                <img src={"/logo-estudio.png"} alt="Logo"  height="30" className=""/>
            </div>
            </nav>
        <div className="contenedor bg-black">
            <div className="columna text-white">
                ¡Bienvenido al Despacho Legal de Adrián Gustavo Guidi!

                Es un honor darle la bienvenida a mi despacho legal. Soy Adrián Gustavo Guidi,  abogado comprometido con la asesoría legal de calidad y el servicio a la comunidad.

                Además de dirigir mi propio estudio legal, tengo el privilegio de colaborar en un consultorio gratuito del Colegio de Abogados de Bahía Blanca, donde he tenido el honor de ayudar a numerosas personas en situaciones legales diversas.

                Mi compromiso es ofrecer un servicio legal comprensivo, ético y profesional a cada cliente. En mi despacho, cada caso recibe una atención cercana y dedicada, ya que creo firmemente en la importancia de comprender las necesidades individuales de quienes confían en mis servicios legales.

                Gracias por considerar mi despacho para sus necesidades legales. Espero poder brindarle la ayuda que necesita.

                Atentamente,

                Adrián Gustavo Guidi
            </div>
            <div className="columna">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={"/carousel-1.jpg"} className="d-block w-75" alt="Hola"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={"/carousel-2.jpg"} className="d-block w-75" alt="Chau"/>
                    </div>
                    <div className="carousel-item">
                    <img src={"/carousel-3.jpg"} className="d-block w-75" alt="Que onda"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
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
    </div>
  </>
  );
}
