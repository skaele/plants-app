import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { PlantsService } from './plants.service'
import { CreatePlantDto } from './dto/create-plant.dto'
import { UpdatePlantDto } from './dto/update-plant.dto'
import { UpdateEmployerDto } from './dto/update-employer.dto'
import { CreateEmployerDto } from './dto/create-employer.dto'

@Controller('plant')
export class PlantsController {
    constructor(private readonly plantsService: PlantsService) {}

    @Post()
    async createPlant(@Body() createPlantDto: CreatePlantDto) {
        return await this.plantsService.createPlant(createPlantDto)
    }

    @Post('employer')
    async createEmployer(@Body() createEmployerDto: CreateEmployerDto) {
        return await this.plantsService.createEmployer(createEmployerDto)
    }

    @Post('custom')
    async executeCustom(@Body() { data }: { data: string }) {
        return await this.plantsService.executeCustomCommand(data)
    }

    @Get()
    findAllPlants() {
        return this.plantsService.findAllPlants()
    }

    @Get('sort')
    findAllSorts() {
        return this.plantsService.findAllSorts()
    }

    @Get('employer')
    findAllEmployer() {
        return this.plantsService.findAllEmployers()
    }

    @Patch()
    async updatePlant(@Body() updatePlantDto: UpdatePlantDto) {
        return await this.plantsService.updatePlants(updatePlantDto)
    }

    @Patch('employer')
    async updateEmployer(@Body() updateEmployerDto: UpdateEmployerDto) {
        return await this.plantsService.updateEmployer(updateEmployerDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.plantsService.removePlant(id)
    }
}
