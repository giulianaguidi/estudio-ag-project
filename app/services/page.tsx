"use client";
import React from "react";
import {Card, CardBody, Divider} from "@nextui-org/react";
import Home from "../background";

export default function Servicios() {
  return (
    <>
    <Home>
    <div className="contenedorServiciosGral">
       <h1 className="serviciosTitulo">Servicios</h1> 
            <div className="contenedorServicios">
                <div className="columnaSinNada"></div>
                <div className="columnaDerecha flex-1" style={{ borderRight: 'solid #38404E', borderTop: 'solid #38404E', borderBottom: 'solid #38404E' }}>                    <h1 className="tituloDerecha"> Derecho Civil y Comercial </h1>
                    <div className="bodyServiciosDerecha"> 
                        <ul>
                            <Divider className="my-4" />
                            <li>Sucesiones</li>
                            <Divider className="my-4" />
                            <li>Accidentes de transito</li>
                            <Divider className="my-4" />
                            <li>Daños y Perjuicios</li>
                            <Divider className="my-4" />
                            <li>Juicios Ejecutivos</li>
                            <Divider className="my-4" />
                            <li>Desalojos</li>
                            <Divider className="my-4" />
                            <li>Contratos</li>
                            <Divider className="my-4" />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contenedorServicios">
                <div className="columnaIzquierda flex-1" style={{ borderLeft: 'solid #38404E', borderTop: 'solid #38404E', borderBottom: 'solid #38404E' }}>
                    <h1 className="tituloDerecha"> Derecho de Familia </h1>
                    <h1 className="bodyServiciosIzquierda"> 
                        <ul>
                            <Divider className="my-4" />
                            <li>Divorcios y uniones convivenciales</li>
                            <Divider className="my-4" />
                            <li>Cuota alimentaria</li>
                            <Divider className="my-4" />
                            <li>Impedimento de contacto</li>
                            <Divider className="my-4" />
                            <li>Regimen de comunicacion</li>
                            <Divider className="my-4" />
                            <li>Cuidado personal</li>
                            <Divider className="my-4" />
                            <li>Filiación</li>
                            <Divider className="my-4" />
                            <li>Adopción</li>
                            <Divider className="my-4" />
                            <li>Responsabilidad paternal</li>
                            <Divider className="my-4" />
                        </ul>
                    </h1>
                </div>
                <div className="columnaSinNada flex-1"></div>

            </div>
            <div className="contenedorServicios">
                <div className="columnaSinNada flex-1"></div>
                <div className="columnaDerecha flex-1" style={{ borderRight: 'solid #38404E', borderTop: 'solid #38404E', borderBottom: 'solid #38404E' }}>
                    <h1 className="tituloDerecha"> Derecho Laboral </h1>
                    <h1 className="bodyServiciosDerecha"> 
                        <ul>
                            <Divider className="my-4" />
                            <li>Accidentes de trabajo</li>
                            <Divider className="my-4" />
                            <li>Indemnizaciones por despido</li>
                            <Divider className="my-4" />
                            <li>Reclamos laborales en general</li>
                            <Divider className="my-4" />
                        </ul>    
                    </h1>
                </div>
            </div>
            <div className="contenedorServicios">
                <div className="columnaIzquierda flex-1" style={{ borderLeft: 'solid #38404E', borderTop: 'solid #38404E', borderBottom: 'solid #38404E' }}>
                    <h1 className="tituloDerecha"> Derecho Administrativo </h1>
                    <h1 className="bodyServiciosIzquierda"> 
                        <ul>
                            <Divider className="my-4" />
                            <li>Amparos de Salud</li>
                            <Divider className="my-4" />
                            <li>Demas</li>
                            <Divider className="my-4" />
                            <li>Demas</li>
                            <Divider className="my-4" />
                        </ul>    
                    </h1>
                </div>
                <div className="columnaSinNada flex-1"></div>
            </div>
        </div>
    </Home>
       
  </>
  );
}
