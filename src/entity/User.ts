import { Entity, PrimaryGeneratedColumn,UpdateDateColumn, Column,Index, CreateDateColumn, BeforeInsert } from "typeorm"

export enum RoleEnumType{
    USER='user',
    ADMIN='admin',
    RECEPTION='reception'
}



@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Index('email_index')
    @Column({
        unique:true
    })
    email: string

    @Column()
    password: string

    @Column({
        type:'enum',
        enum:RoleEnumType,
        default:RoleEnumType.USER
    })
    role: RoleEnumType.USER

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}
