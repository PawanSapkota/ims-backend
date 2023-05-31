import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-chrfo8pmbg5e1f27uqt0-a.oregon-postgres.render.com",
    port: 5432,
    username: "kisan",
    password: "D8g2trHTyAsRHngSpUDvX8asnzjyTv2V",
    database: "imscodehub",
    synchronize: true,
    ssl:true,
    logging: false,
    entities: [
        'src/entity/**/*.ts',"./src/entity/**/*.ts"
    ], 
    migrations: [
        'src/migration/**/*.ts'
    ],
    subscribers: [
        'src/subscrib/**/*.ts'
    ],
})
