import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAccountInput } from './dto/create-account.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './schemas/account.schema';
import { AccountService } from './account.service';

@Resolver(() => Account)
export class AccountResolver {
    constructor(private readonly service: AccountService) {}

    @Mutation(() => Account)
    createAccount(@Args('data') input: CreateAccountInput) {
        return this.service.create(input);
    }

    @Query(() => [Account], { name: 'accountspage' })
    findAllPage(@Args('listAccountInput') listAccountInput: ListInput) {
        return this.service.getAllPage(listAccountInput);
    }

    @Query(() => [Account], { name: 'accounts' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Account, { name: 'account' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Account)
    updateAccount(@Args('data') input: UpdateAccountInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Account)
    updatePassword(@Args('data') input: UpdateAccountInput) {
        return this.service.updatePassword(input._id, input);
    }

    @Mutation(() => Account)
    removeAccount(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}