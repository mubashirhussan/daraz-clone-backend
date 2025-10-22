/* eslint-disable prettier/prettier */
import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./modules/users/entities/user.entity"


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "daraz_clone",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/migrations/*{.ts,.js}"],
  synchronize: false,
      
})
