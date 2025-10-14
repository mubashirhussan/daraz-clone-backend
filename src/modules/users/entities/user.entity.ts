import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Order } from "src/modules/orders/entities/order.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude() // hides password in response
  password: string;

  @Column({ default: "user" })
  role: string; // 'user' | 'admin'

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
