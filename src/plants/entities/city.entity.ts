import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Warehouse } from './warehouse.entity'

@Entity('City')
export class City {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @OneToMany(() => Warehouse, (house) => house.city)
    warehouses: Warehouse[]
}
