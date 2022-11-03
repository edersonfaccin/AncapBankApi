import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateDepositInput } from './dto/create-deposit.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateDepositInput } from './dto/update-deposit.input';
import { Deposit } from './schemas/deposit.schema';
import { DepositService } from './deposit.service';

@Resolver(() => Deposit)
export class DepositResolver {
    constructor(private readonly service: DepositService) {}

    @Mutation(() => Deposit)
    createDeposit(@Args('data') input: CreateDepositInput) {
        return this.service.create(input);
    }

    @Query(() => [Deposit], { name: 'depositspage' })
    findAllPage(@Args('listDepositInput') listDepositInput: ListInput) {
        return this.service.getAllPage(listDepositInput);
    }

    @Query(() => [Deposit], { name: 'deposits' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Deposit, { name: 'deposit' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Deposit)
    updateDeposit(@Args('data') input: UpdateDepositInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Deposit)
    removeDeposit(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}