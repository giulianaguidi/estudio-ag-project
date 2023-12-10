"use client";
import React, { useState } from "react";
import { Button, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Footer from "../footer";
import { Fade } from "react-awesome-reveal"; 
import Image from 'next/image'


export default function Servicios() {
  return (
    <>
       <div className="contenedorServiciosGral">
            <div className="contenedorServicios">
                <div className="columnaSinNada flex-1"></div>
                <div className="columnaDerecha flex-1">
                    <h1 className="tituloDerecha"> Derecho Civil y Comercial </h1>
                    <h1 className="bodyServicios"> 

                    </h1>
                </div>
            </div>
            <div className="contenedorServicios">
                <div className="columnaIzquierda flex-1">
                    <h1 className="tituloDerecha"> Derecho Laboral </h1>
                    <h1 className="bodyServicios"> 

                    </h1>
                </div>
                <div className="columnaSinNada flex-1"></div>

            </div>
            <div className="contenedorServicios">
                <div className="columnaSinNada flex-1"></div>
                <div className="columnaDerecha flex-1">
                    <h1 className="tituloDerecha"> Derecho de Familia </h1>
                    <h1 className="bodyServicios"> 

                    </h1>
                </div>
            </div>
            <div className="contenedorServicios">
                <div className="columnaIzquierda flex-1">
                    <h1 className="tituloDerecha"> Derecho Administrativo </h1>
                    <h1 className="bodyServicios"> 

                    </h1>
                </div>
                <div className="columnaSinNada flex-1"></div>
            </div>
        </div>
  </>
  );
}
