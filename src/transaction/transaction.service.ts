import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/dto/list.input';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { Transaction } from './schemas/transaction.schema';

@Injectable()
export class TransactionService {
    constructor(@InjectModel('Transaction') private readonly model: Model<Transaction>){ }

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
            throw new HttpException('Transaction not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateTransactionInput) {
        const createdData = new this.model(data)

        return await createdData.save()
    }

    async update(id: string, data: UpdateTransactionInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
