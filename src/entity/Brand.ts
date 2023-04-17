import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, OneToMany} from 'typeorm';
import { Product } from './Product';

@Entity()
export class Brand{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    Brand_name:string

    @Column()
    image:string

    @OneToMany(()=>Product,(product)=>product.product_brand,{
        cascade:true,
        onDelete:'CASCADE',onUpdate:'CASCADE'
    })
    product:Product[]

    @CreateDateColumn()
    createdAt:Date
}