import { Body, Controller, Get, Post, UsePipes, ValidationPipe, Param, Patch, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { MapInterceptor } from '@automapper/nestjs';
import { UserEntity } from './entities/user.entity';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @ApiTags('Users')
    @Get('/')
    @UseInterceptors(MapInterceptor(UserEntity, UserResponseDto, {isArray: true}))
    getUsers() {
      return  this.usersService.getUsers();

    }
    @Get('/:id')
    @UseInterceptors(MapInterceptor(UserEntity, UserResponseDto))
    getUserById(@Param('id') id: string) {
      return this.usersService.getUserById(parseInt(id));
    }


    @Post()
    @UsePipes(new ValidationPipe())
    @UseInterceptors(MapInterceptor(UserEntity, UserResponseDto))
    createUser(@Body() user: createUserDto){
      return this.usersService.createUser(user);

    }

    @Patch('/:id')
    @UseInterceptors(MapInterceptor(UserEntity, UserResponseDto))
    update(@Param('id') id: string, @Body() user: UpdateUserDto) {
      return this.usersService.updateUser(parseInt(id), user);
    }

    @Delete('/:id')
    @UseInterceptors(MapInterceptor(UserEntity, UserResponseDto))
    remove(@Param('id') id: string) {
      return this.usersService.removeUser(parseInt(id));
    }
}
