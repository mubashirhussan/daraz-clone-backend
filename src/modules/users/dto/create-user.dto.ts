import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "" })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "" })
  @MinLength(6)
  password: string;
}

export class LoginUserDto {
  @ApiProperty({ example: "" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "" })
  @IsNotEmpty()
  password: string;
}
