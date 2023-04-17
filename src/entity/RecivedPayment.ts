import { Entity,UpdateDateColumn,PrimaryGeneratedColumn,CreateDateColumn,Column } from 'typeorm';


@Entity()
export class recivedPayment{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @Column()
    recived_from:string

    @Column({
        default:"payment recived"
    })
    default_status:string

    @Column()
    amount:string
     
    @Column({
        default:"confirmation required"
    })
    status:string

    @Column({
        nullable:true
    })
    category:string

    @Column()
    reason:string
}