"use client";
import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import Image from 'next/image'
import Home from "../background";
import CardProfile from "./cardProfile";


export default function Contacto() {
  return (
    <>
        <Home>
          <div className="contenedorDeContenedorDeServicios">
            <div className="contenedorProfile">         
              <CardProfile></CardProfile>
              <Card className="card py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Dirección </p>
                  <h4 className="font-bold text-large">Bahía Blanca, Alsina 35, Piso 7, Oficina 4</h4>
                </CardHeader>
              </Card>
              <Card className="card py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Email</p>
                  <h4 className="font-bold text-large">estudioadrianguidi@gmail.com</h4>
                </CardHeader>
              </Card>
              <Card className="card py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Horarios</p>
                  <h4 className="font-bold text-large">Lunes, Martes, Miercoles y Jueves de 17 a 20hs</h4>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Home>
    </>
  );
}
