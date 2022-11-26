import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Employer } from './employer.entity'
import { Sort } from './sort.entity'
import { Warehouse } from './warehouse.entity'

@Entity('Plant')
export class Plant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    state: string

    @ManyToOne(() => Sort, (sort) => sort.plants)
    sort: Sort

    @ManyToOne(() => Employer, (employer) => employer.plants)
    employer: Employer

    @Column({ nullable: false })
    dateGrown: Date

    @Column({ nullable: false })
    dateWatering: Date

    @Column({ type: 'integer', nullable: false })
    height: number
}
