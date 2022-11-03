import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/dto/list.input';
import { generateCreditCardNumber, generateCvvNumber, generateExpirationDate } from 'src/common/utils/Functions';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { Card } from './schemas/card.schema';

@Injectable()
export class CardService {
    constructor(@InjectModel('Card') private readonly model: Model<Card>){ }

    async getAllPage(pagination: ListInput) {
        const { limit, offset } = pagination;

        return await this.model.find().skip(offset).limit(limit).exec()
    }
    
    async getAll() {
        return await this.model.find()
    }

    async getById(id: string) {
        try {
            return await this.model.findById(id)
        } catch (error) {
            throw new HttpException('Card not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateCardInput) {
        let newData = data

        newData.number_card = generateCreditCardNumber()
        newData.cvv = generateCvvNumber()
        newData.date_expiration = generateExpirationDate()

        const createdData = new this.model(newData)
        return await createdData.save()
    }

    async update(id: string, data: UpdateCardInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
