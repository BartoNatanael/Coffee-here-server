import { Injectable } from '@nestjs/common';
import { CreateRoasteryDto } from './dto/create-roastery.dto';
import { UpdateRoasteryDto } from './dto/update-roastery.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Roastery, RoasteryDocument } from './entities/roastery.entity';
import { Model } from 'mongoose';

@Injectable()
export class RoasteryService {
  constructor(
    @InjectModel(Roastery.name)
    private readonly roasteryModel: Model<RoasteryDocument>,
  ) {}
  async create(createRoasteryDto: CreateRoasteryDto) {
    const createdRoastery = await this.roasteryModel.create(createRoasteryDto);
    return createdRoastery;
  }

  async findAll() {
    return this.roasteryModel.find().exec();
  }

  async findOne(id: number) {
    return this.roasteryModel.findById({ _id: id }).exec();
  }

  async update(id: number, updateRoasteryDto: UpdateRoasteryDto) {
    return this.roasteryModel
      .findByIdAndUpdate({ _id: id }, updateRoasteryDto)
      .exec();
  }

  async remove(id: number) {
    return this.roasteryModel.findByIdAndRemove({ _id: id }).exec();
  }
}
