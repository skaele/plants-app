import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getManager, Repository } from 'typeorm'
import { CreateEmployerDto } from './dto/create-employer.dto'
import { CreatePlantDto } from './dto/create-plant.dto'
import { UpdateEmployerDto } from './dto/update-employer.dto'
import { UpdatePlantDto } from './dto/update-plant.dto'
import { Employer } from './entities/employer.entity'
import { Plant } from './entities/plant.entity'
import { Sort } from './entities/sort.entity'

@Injectable()
export class PlantsService {
    constructor(
        @InjectRepository(Plant)
        private plantRepository: Repository<Plant>,
        @InjectRepository(Employer)
        private employerRepository: Repository<Employer>,
        @InjectRepository(Sort)
        private sortRepository: Repository<Sort>,
    ) {}

    async createPlant(createPlantDto: CreatePlantDto) {
        const { sortId, employerId, ...model } = createPlantDto
        await this.plantRepository.save({
            employer: { id: employerId },
            sort: { id: sortId },
            ...model,
        })
    }

    async createEmployer(createEmployerDto: CreateEmployerDto) {
        const { nurseryId, ...model } = createEmployerDto
        await this.employerRepository.save({
            nursery: { id: nurseryId },
            ...model,
        })
    }

    findAllPlants() {
        return this.plantRepository.find()
    }

    async executeCustomCommand(command: string) {
        const manager = this.employerRepository.manager

        const result = await manager.query(command)

        console.log(result)

        return result
    }

    findAllSorts() {
        return this.sortRepository.find()
    }

    findAllEmployers() {
        return this.employerRepository.find()
    }

    async updatePlants(updatePlantDto: UpdatePlantDto) {
        const { sortId, employerId, id, ...model } = updatePlantDto
        await this.plantRepository.update(id, {
            employer: { id: employerId },
            sort: { id: sortId },
            ...model,
        })
    }

    async updateEmployer(updateEmployerDto: UpdateEmployerDto) {
        const { nurseryId, id, ...model } = updateEmployerDto
        await this.employerRepository.update(id, {
            nursery: { id: nurseryId },
            ...model,
        })
    }

    removePlant(id: string) {
        this.removePlant(id)
    }
}
