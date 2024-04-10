import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client'; //Importamos el modelo de datos

@Injectable() //Esto es un decorador que le dice a Nest que esta clase es un servicio
export class TaskService {
  constructor(private Prisma: PrismaService) {}

  async getAllTask(): Promise<Task[]> {
    return this.Prisma.task.findMany();
  }
  async getTaskById(id: number): Promise<Task> {
    return this.Prisma.task.findUnique({
      where: {
        id,
      },
    });
  }
  async creatTask(data: Task): Promise<Task> {
    return this.Prisma.task.create({
      data,
    });
  }

  async updateTask(id: number, data: Task): Promise<Task> {
    return this.Prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.Prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
