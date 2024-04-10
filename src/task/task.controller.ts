import {Controller, Get, Post, Put, Delete, Body, Param, NotFoundException} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Controller('task') //Esto es un decorador que le dice a Nest que esta clase es un controlador
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Get()
    async getAllTask(){
        try{
            return this.taskService.getAllTask();
        }catch(error){
            throw new NotFoundException('Task not exist');
        }
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string){
        try{
            const taskFound = await this.taskService.getTaskById(Number(id));
            if (!taskFound) throw new NotFoundException('Task not exist');
            return taskFound;
        }catch(error){
            throw new NotFoundException('Task not exist');
        }
    }
    
    @Post()
    async creatTask(@Body() data: Task){
        try{
            return await this.taskService.creatTask(data); 
        }catch (error) {
            throw new NotFoundException('Task not exist');
        }
    }

    @Put(':id')
    async updateTask(@Body() data: Task, @Param('id') id: string){
        try {
            return await this.taskService.updateTask(Number(id), data);
        }
        catch (error) {
            throw new NotFoundException('Task not exist');
        }
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        try {
            return await this.taskService.deleteTask(Number(id));
        } catch (error) {
            throw new NotFoundException('Task not exist');
        }
    }

}