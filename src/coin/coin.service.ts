import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/dto/list.input';
import { CreateCoinInput } from './dto/create-coin.input';
import { UpdateCoinInput } from './dto/update-coin.input';
import { Coin } from './schemas/coin.schema';

@Injectable()
export class CoinService {
    constructor(@InjectModel('Coin') private readonly model: Model<Coin>){ }

    async getAllPage(pagination: ListInput) {
        const { limit, offset } = pagination;

        return await this.model.find().skip(offset).limit(limit).exec()
    }
    
    async getAll() {
        return await this.model.find()
    }

    async getById(id: string) {
        return await this.model.findById(id)
    }

    async create(data: CreateCoinInput) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: UpdateCoinInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
