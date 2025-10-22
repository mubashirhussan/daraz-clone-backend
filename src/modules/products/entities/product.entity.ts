import { Order } from "src/modules/orders/entities/order.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 1 })
  stock: number;

  @Column({ nullable: true })
  image: string;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
