import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePlantDto } from './dto/create-plant.dto'
import { UpdatePlantDto } from './dto/update-plant.dto'
import { Employer } from './entities/employer.entity'
import { Plant } from './entities/plant.entity'

@Injectable()
export class PlantsService {
    constructor(
        @InjectRepository(Plant)
        private plantRepository: Repository<Plant>,
        @InjectRepository(Employer)
        private employerRepository: Repository<Employer>,
    ) {}

    create(createPlantDto: CreatePlantDto) {
        return 'This action adds a new plant'
    }

    findAllPlants() {
        return this.plantRepository.find()
    }

    findOne(id: string) {
        return `This action returns a #${id} plant`
    }

    update(id: string, updatePlantDto: UpdatePlantDto) {
        return `This action updates a #${id} plant`
    }

    remove(id: string) {
        return `This action removes a #${id} plant`
    }
}
