import { Module } from '@nestjs/common'
import { PlantsService } from './plants.service'
import { PlantsController } from './plants.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Plant } from './entities/plant.entity'
import { Employer } from './entities/employer.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Plant, Employer])],
    controllers: [PlantsController],
    providers: [PlantsService],
})
export class PlantsModule {}
