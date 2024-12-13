import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  orderDate: Date;

  @Column({ default: 'pending' })
  status: string; // pending, processing, shipped, delivered

  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  total: number;

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;
}
