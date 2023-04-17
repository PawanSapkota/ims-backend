import { Entity,PrimaryGeneratedColumn,CreateDateColumn,Column } from 'typeorm';


@Entity()
export class MakePayment{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @CreateDateColumn()
    createdAt:Date

    @Column()
    reciver_name:string

    @Column()
    amount:string
    
    @Column({
        default:"paid to"
    })
    default_status:string

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