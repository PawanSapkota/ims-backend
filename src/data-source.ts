import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-chnrong2qv207f3bv2p0-a.oregon-postgres.render.com",
    port: 5432,
    username: "sahil",
    password: "akiLwQ1FZanL1wcfb8u4HQFhBqwM70hz",
    database: "ims_21kv",
    synchronize: true,
    ssl:true,
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
