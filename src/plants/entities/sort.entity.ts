import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Plant } from './plant.entity'

@Entity('Sort')
export class Sort {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @OneToMany(() => Plant, (plant) => plant.sort)
    plants: Plant[]
}
