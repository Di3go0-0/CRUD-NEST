import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client"; //Importamos el modelo de datos

@Injectable() //Esto es un decorador que le dice a Nest que esta clase es un servicio
export class UserService{
    constructor (private Prisma: PrismaService){}

}