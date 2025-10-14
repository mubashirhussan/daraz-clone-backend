import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
// import { UpdateOrderDto } from "./dto/update-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { User } from "../users/entities/user.entity";
import { Product } from "../products/entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException("User not found");

    const products = await this.productRepo.findByIds(dto.productIds);
    if (!products.length)
      throw new NotFoundException("No valid products found");

    const totalAmount = products.reduce((sum, p) => sum + Number(p.price), 0);

    const order = this.orderRepo.create({
      user,
      products,
      totalAmount,
    });

    return this.orderRepo.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepo.find({ relations: ["user", "products"] });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ["user", "products"],
    });
    if (!order) throw new NotFoundException("Order not found");
    return order;
  }

  async remove(id: number): Promise<void> {
    const result = await this.orderRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException("Order not found");
  }
}
