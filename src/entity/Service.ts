import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, ManyToMany, JoinTable} from 'typeorm';
import { Product } from './Product';

@Entity()
export class Services{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    service_name:string

    @Column()
    price:string

    @Column()
    image:string
    
    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    product:Array<{product_id:string,unit:string,quantity:string}>

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date
}