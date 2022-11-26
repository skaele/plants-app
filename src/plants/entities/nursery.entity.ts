import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Employer } from './employer.entity'
import { Warehouse } from './warehouse.entity'

@Entity('Nursery')
export class Nursery {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    address: string

    @ManyToOne(() => Warehouse, (warehouse) => warehouse.nurseries)
    warehouse: Warehouse

    @OneToMany(() => Employer, (employer) => employer.nursery)
    employers: Employer[]
}
