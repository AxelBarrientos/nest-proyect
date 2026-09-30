import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}
    
    getUsers() {
        return this.prisma.user.findMany();
    }

    getUserById(id: number) {
        return this.prisma.user.findUnique({where: {id}});
    }
    
    createUser(user:createUserDto) {


        return this.prisma.user.create({data: user});
    }

    updateUser(id: number, user: UpdateUserDto) {
        return this.prisma.user.update({where: {id}, data: user});
    }

    removeUser(id: number) {
        return this.prisma.user.delete({where: {id}});
    }       
}
