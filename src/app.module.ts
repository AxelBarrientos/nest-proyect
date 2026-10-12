import { Module } from '@nestjs/common';
import {AutomapperModule} from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { createMapper } from '@automapper/core';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import {TasksModule}from './tasks/tasks.module';

@Module({
  imports: [AutomapperModule.forRoot({ strategyInitializer: classes(), }), TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
  
})
export class AppModule {}
  