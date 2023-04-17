import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "26462264",
    database: "dreamsalon",
    synchronize: true,
    logging: false,
    entities: [
        'src/entity/**/*.ts'
    ],
    migrations: [
        'src/migration/**/*.ts'
    ],
    subscribers: [
        'src/subscrib/**/*.ts'
    ],
})
