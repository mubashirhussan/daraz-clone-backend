import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "Mubashir Hussan" })
  name: string;

  @ApiProperty({ example: "mubashir@example.com" })
  email: string;

  @ApiProperty({ example: "123456" })
  password: string;
}
