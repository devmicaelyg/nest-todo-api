import { Module } from '@nestjs/common';
import { TodosModule } from './todo/todo.module';

@Module({
  imports: [TodosModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
