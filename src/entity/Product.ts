import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn, ManyToOne, OneToMany} from 'typeorm';
import { Brand } from './Brand';
import { Category } from './Category';
import { Sales } from './Sales';

@Entity()
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    
    @Column()
    product_name:string

    @ManyToOne(()=>Category,(category)=>category.product,{
        eager:true
    })
    product_category:Category

    @ManyToOne(()=>Brand,(brand)=>brand.product,{eager:true})
    product_brand:Brand

    @Column()
    product_quantity:string

    @Column()
    desc:string

    @Column({
        nullable:true
    })
    price:string

    @Column()
    image:string

    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    priceandunit:Array<{price:string,unit:string}>

    @CreateDateColumn()
    createdAt:Date

  


    // @OneToMany(()=>Sales,(sales)=>sales.productId,{
    //     cascade:true,eager:true,
    //     onDelete:'CASCADE',onUpdate:'CASCADE'
    // })
    // sales:Sales[]
}