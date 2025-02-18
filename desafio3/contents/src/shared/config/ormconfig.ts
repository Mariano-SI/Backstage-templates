import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: ["src/modules/**/entities/*.ts"],
  migrations: ["src/shared/database/migrations/*.ts"],
  subscribers: [],
});
