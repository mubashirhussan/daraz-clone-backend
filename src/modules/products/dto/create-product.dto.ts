import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateProductDto {
  @ApiProperty({ example: "Smartphone", description: "Product title" })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: "Latest Android phone",
    description: "Product description",
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 999.99, description: "Product price" })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 20, required: false, description: "Stock quantity" })
  @IsOptional()
  stock?: number;

  @ApiProperty({ example: "uploads/image.jpg", required: false })
  @IsOptional()
  image?: string;
}
