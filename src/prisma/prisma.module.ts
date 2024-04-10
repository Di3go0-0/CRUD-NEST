import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService], //Lo que sea que necesite el servicio
    exports: [PrismaService], //Lo que sea que necesite el servicio
})
export class PrismaModule{}