import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({ example: "" })
  @IsNumber()
  userId: number;

  @ApiProperty({ example: "" })
  @IsArray()
  productIds: number[];

  @ApiProperty({ example: "" })
  @IsOptional()
  totalAmount?: number; // optional, can calculate from products
}
