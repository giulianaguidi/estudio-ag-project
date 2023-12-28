"use client";
import React from "react";
import { Fade } from "react-awesome-reveal"; 
import NextJsCarousel from "./carousel";
import Home from "./background";


export default function HomePage() {
  return (
    <>
    <Home>
    <div className="columnaGralHome">
            <div className="columna4">
                    <Fade duration={5000}> 
                        <h1 className="h1">Bienvenidos al Despacho Legal de Adrián Gustavo Guidi</h1> 
                    </Fade> 
                </div>
            <div className="columna text-black">
                <Fade duration={7000}>
                    <div className="columna4">
                        <h2 className="h22">
                                Es un honor darle la bienvenida a mi despacho legal. Soy Adrián Gustavo Guidi,  
                                abogado comprometido con la asesoría legal de calidad y el servicio a la comunidad.
                        </h2>
                        <h2 className="h22">
                                Además de dirigir mi propio estudio legal, tengo el privilegio de colaborar en un consultorio 
                                gratuito del Colegio de Abogados de Bahía Blanca, donde he tenido el honor de ayudar 
                                a numerosas personas en situaciones legales diversas.
                        </h2>
                        <h2 className="h22">
                                Mi compromiso es ofrecer un servicio legal comprensivo, ético y profesional a cada cliente. 
                                En mi despacho, cada caso recibe una atención cercana y dedicada, ya que creo firmemente en la importancia de 
                                comprender las necesidades individuales de quienes confían en mis servicios legales.
                        </h2>
                        <h2 className="h22">
                                Gracias por considerar mi despacho para sus necesidades legales. Espero poder brindarle la ayuda que necesita.
                        </h2>
                        <h2 className="h22">
                                Atentamente, 
                        </h2>
                        <h2 className="h22">
                                Adrián Gustavo Guidi
                        </h2>
                    </div>
                </Fade> 
            </div>    
        </div>
    </Home>
        
  </>
  );
}
