import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Product } from './Product';
import { Customer } from './Customer';


@Entity() 
export class Sales{

    @PrimaryGeneratedColumn('uuid')
    id:string

    // @Column()
    // product_name:string

    // @Column()
    // unit:string

    @Column()
    quantities:string

    @Column()
    price:string

    @Column()
    discount:string

    @Column()
    vat:string

    @Column()
    netAmount:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    paymentType:Array<{method:string,amount:string}>

    @ManyToMany(()=>Product,{
        cascade:true,eager:true,
    })
    @JoinTable()
    productId:Product[]

    // @ManyToOne(()=>Product,(Product)=>Product.sales)
    // productId:Product[]

    @ManyToOne(()=>Customer,(Customer)=>Customer.salesId,{
        eager:false
    })
    CustomerId:Customer
}