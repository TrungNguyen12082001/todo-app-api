import { Task } from './tasks.entity';
import { AppDataSource } from '../../index';
import { instanceToInstance } from 'class-transformer';

export class TasksController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  //@ts-ignore
  public async getAll(): Promise<Task[]> {
    // Declare a variable to hold all tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      // Convert the tasks instance to an array of object
      allTasks = instanceToInstance(allTasks) as Task[];

      return allTasks;
    } catch (errors) {
      console.log(errors);
    }
  }
}
