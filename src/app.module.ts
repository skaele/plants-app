import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { City } from './plants/entities/city.entity'
import { Employer } from './plants/entities/employer.entity'
import { Nursery } from './plants/entities/nursery.entity'
import { Plant } from './plants/entities/plant.entity'
import { Sort } from './plants/entities/sort.entity'
import { Warehouse } from './plants/entities/warehouse.entity'
import { PlantsModule } from './plants/plants.module'
import postgresConnection from './postgres-config'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...postgresConnection,
            entities: [Nursery, City, Sort, Warehouse, Employer, Plant],
        }),

        PlantsModule,
    ],
})
export class AppModule {}
