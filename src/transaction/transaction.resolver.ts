import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { Transaction } from './schemas/transaction.schema';
import { TransactionService } from './transaction.service';

@Resolver(() => Transaction)
export class TransactionResolver {
    constructor(private readonly service: TransactionService) {}

    @Mutation(() => Transaction)
    createTransaction(@Args('data') input: CreateTransactionInput) {
        return this.service.create(input);
    }

    @Query(() => [Transaction], { name: 'transactionspage' })
    findAllPage(@Args('listTransactionInput') listTransactionInput: ListInput) {
        return this.service.getAllPage(listTransactionInput);
    }

    @Query(() => [Transaction], { name: 'transactions' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Transaction, { name: 'transaction' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Transaction)
    updateTransaction(@Args('data') input: UpdateTransactionInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Transaction)
    removeTransaction(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}