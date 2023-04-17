import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { Sales } from './Sales';
@Entity()
export class Customer{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string
    
    @Column()
    address:string
    
    @Column()
    contact_no:string

    @Column()
    email:string

    @Column()
    no_of_order:number
    
    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToMany(()=>Sales,(Sales)=>Sales.CustomerId,{
        cascade:true,eager:true,
        onDelete:'CASCADE',onUpdate:'CASCADE'
    })
    salesId:Sales[]
}