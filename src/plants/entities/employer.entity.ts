import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Nursery } from './nursery.entity'
import { Plant } from './plant.entity'
import { Warehouse } from './warehouse.entity'

@Entity('Employer')
export class Employer {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    post: string

    @Column({ nullable: false })
    sex: boolean

    @Column({ type: 'integer', nullable: false })
    experience: number

    @Column({ type: 'integer', nullable: false })
    age: number

    @ManyToOne(() => Nursery, (nursery) => nursery.employers)
    nursery: Nursery

    @OneToMany(() => Plant, (plant) => plant.employer)
    plants: Plant[]
}
