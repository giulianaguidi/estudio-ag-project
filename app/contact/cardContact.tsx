"use client";
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardContact() {
  return (
    <Card className="card py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Direccion: Alsina </p>
        <h4 className="font-bold text-large">Email: estudioadrianguidi@gmail.com</h4>
      </CardHeader>
    </Card>
  );
}
