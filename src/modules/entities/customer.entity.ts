import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;
}
