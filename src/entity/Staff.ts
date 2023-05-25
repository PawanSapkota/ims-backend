import { Entity, PrimaryGeneratedColumn,UpdateDateColumn, Column,Index, CreateDateColumn, BeforeInsert } from "typeorm"

export enum RoleEnumType{
    USER='user',
    ADMIN='admin',
    RECEPTION='reception'
}



@Entity()
export class Staff {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({
        unique:true
    })
    email: string

    @Column()
    staff_name:string

    @Column()
    address:string

    @Column()
    phone_no:string

    @Column()
    salary:string

    @Column()
    password: string

    @Column()
    document_left: string

    @Column()
    document_right: string

    @Column()
    employee_img: string

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
