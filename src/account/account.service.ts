import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/dto/list.input';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './schemas/account.schema';

@Injectable()
export class AccountService {
    constructor(@InjectModel('Account') private readonly model: Model<Account>){ }

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
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateAccountInput) {
        let newData = data

        let result = await this.model.findOne().sort('-account_number')
        newData.account_number = (result?.account_number || 0) + 1

        const createdData = new this.model(newData)
        return await createdData.save()
    }

    async update(id: string, data: UpdateAccountInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
