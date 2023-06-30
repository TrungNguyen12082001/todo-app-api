import { Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Priority } from '../enums/Priotity';
// import { Status } from '../enums/Status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
