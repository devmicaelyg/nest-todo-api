import { DataSource } from "typeorm";
import { Todo } from "../model/todo.entity";

export const todoProviders = [
  {
    provide: 'TODO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todo),
    inject: ['DATA_SOURCE'],
  },
];