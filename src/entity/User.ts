import { Entity, PrimaryGeneratedColumn,UpdateDateColumn, Column,Index, CreateDateColumn, BeforeInsert } from "typeorm"
import * as bcrypt from 'bcryptjs'

export enum RoleEnumType{
    USER='user',
    ADMIN='admin',
    RECEPTION='reception'
}



@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

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


    @BeforeInsert()
    async hashPassword(){
        this.password=await bcrypt.hash(this.password,12)
    }

    static async comparePasswords(
        candidatePassword: string,
        hashedPassword: string
    ){
        return await  bcrypt.compare(candidatePassword,hashedPassword)
    }


}
