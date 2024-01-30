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
        </div>
    </Home>      
  </>
  );
}
