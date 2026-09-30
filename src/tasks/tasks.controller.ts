import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('Tasks') 
export class TaskController {
    

    constructor(private tasksService:TasksService) {}
    
    @Get()  
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Return all tasks'})
    getAllTasks(@Query() query: any){
      console.log(query)
       return this.tasksService.getTasks();
        
    }
    @Get('/:id')
    @ApiOperation({summary: 'Get task by ID'})
    @ApiResponse({status: 200, description: 'Task found'})
    getTask(@Param('id') id: string){
      console.log(id)
      return this.tasksService.getTask(parseInt(id));

    }
     @Post()
     @ApiOperation({summary: 'Create a new task'})
     @ApiResponse({status: 201, description: 'Task created'})
     @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto) {
        console.log(task)
       return this.tasksService.createTask(task);
    }

    
     @Put() 
     @ApiOperation({summary: 'Update a task'}) 
     @ApiResponse({status: 200, description: 'Task updated'})
    updateTask(@Body() task: UpdateTaskDto){
       return 'Actualizando tareas'
    }

    
     @Delete()  
     @ApiOperation({summary: 'Delete a task'})
     @ApiResponse({status: 200, description: 'Task deleted'})
    delateTask(){
       return 'Eliminando tareas'
    }

    @Patch() 
    @ApiOperation({summary: 'Update task status'})
    @ApiResponse({status: 200, description: 'Task status updated'})
         //solo actualiza una cosa, actualizacion parcial
    updateTaskStatus() {
        return 'Actualizando el estado de una tarea tarea'
    }
}