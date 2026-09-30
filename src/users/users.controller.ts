import { Body, Controller, Get, Post, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @ApiTags('Users')
    @Get('/')
    getUsers() {
      return  this.usersService.getUsers();

    }
    @Get('/:id')
    getUserById(@Param('id') id: string) {
      return this.usersService.getUserById(parseInt(id));
    }


    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: createUserDto){
      return this.usersService.createUser(user);
    }
}
