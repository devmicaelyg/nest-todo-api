import { Module } from '@nestjs/common';
import { TodosController } from './controller/todo.controller';
import { TodosService } from './service/todo.service';
import { todoProviders } from './providers/todo.providers';
import { DatabaseModule } from 'src/config/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [...todoProviders, TodosService],
  exports: [TodosModule]
})
export class TodosModule {}