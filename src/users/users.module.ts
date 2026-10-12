import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { NestApplication } from '@nestjs/core';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from '../prisma.service';
import { UserProfile } from './mappers/user.profile';


@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserProfile], 
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
 //   consumer.apply(LoggerMiddleware).forRoutes(
   //   { path: '/users', method: RequestMethod.GET },
     // {
       // path: '/users',
       // method: RequestMethod.POST,
    //  },
  //  ).apply(AuthMiddleware).forRoutes('users')
  }
}
