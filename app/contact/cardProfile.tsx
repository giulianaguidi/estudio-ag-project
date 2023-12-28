"use client";
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardProfile() {
  return (
    <Card className="card py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Abogado</p>
        <h4 className="font-bold text-large">Adrian Gustavo Guidi</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="./adrian-guidi.jpg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
