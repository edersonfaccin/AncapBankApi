import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/dto/list.input';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly model: Model<User>){ }

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

    async create(data: CreateUserInput) {
        let newData = data
        newData.password_account = bcrypt.hashSync(newData.password_account, 8)
        const createdData = new this.model(newData)

        return await createdData.save()
    }

    async update(id: string, data: UpdateUserInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async updatePassword(id: string, data: UpdateUserInput) {
        let newData = data
        newData.password_account = bcrypt.hashSync(newData.password_account, 8)

        await this.model.updateOne({ _id: id }, newData).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
