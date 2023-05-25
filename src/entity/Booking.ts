import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, ManyToMany, JoinTable} from 'typeorm';


export enum StatusEnumType{
    PENDING='pending',
    CANCELED='canceled',
    COMPLETED='completed'
}
@Entity()
export class Booking{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    title:string

    @Column()
    price:string

    @Column()
    image:string

    @Column({
        type:'enum',
        enum:StatusEnumType,
        default:StatusEnumType.PENDING
    })
    status:StatusEnumType.PENDING

    @Column()
    date:string
    
    @Column({
        type:'jsonb',
        array:false,
        default:() => "'[]'",
        nullable:true,
    })
    service:Array<{service_id:string,name:string}>

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date 
}