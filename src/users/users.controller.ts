import { Body, Controller, Get, Post, UsePipes, ValidationPipe, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

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

    @Patch('/:id')
    update(@Param('id') id: string, @Body() user: UpdateUserDto) {
      return this.usersService.updateUser(parseInt(id), user);
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
      return this.usersService.removeUser(parseInt(id));
    }
}
