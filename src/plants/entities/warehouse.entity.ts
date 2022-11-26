import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { City } from './city.entity'
import { Nursery } from './nursery.entity'

@Entity('Warehouse')
export class Warehouse {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ type: 'integer', nullable: false })
    amountPlaces: number

    @ManyToOne(() => City, (city) => city.warehouses)
    city: City

    @OneToMany(() => Nursery, (nursery) => nursery.warehouse)
    nurseries: Nursery[]
}
