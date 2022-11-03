import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { AccountService } from 'src/account/account.service';
import { UpdateAccountInput } from 'src/account/dto/update-account.input';
import { ListInput } from 'src/common/dto/list.input';
import { CreateDepositInput } from './dto/create-deposit.input';
import { UpdateDepositInput } from './dto/update-deposit.input';
import { Deposit } from './schemas/deposit.schema';

@Injectable()
export class DepositService {
    constructor(
        @InjectModel('Deposit') private readonly model: Model<Deposit>,
        private readonly accountService: AccountService
    ){ }

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
            throw new HttpException('Deposit not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateDepositInput) {

        const account = await this.accountService.getById(data.idaccount)

        if(account){
            const createdData = new this.model(data)
            let updAccount = <UpdateAccountInput> {
                balance: account.balance + data.value
            }

            await this.accountService.update(data.idaccount, updAccount)

            return await createdData.save()
        }else{
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
        }
    }

    async update(id: string, data: UpdateDepositInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}
