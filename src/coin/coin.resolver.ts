import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCoinInput } from './dto/create-coin.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateCoinInput } from './dto/update-coin.input';
import { Coin } from './schemas/coin.schema';
import { CoinService } from './coin.service';

@Resolver(() => Coin)
export class CoinResolver {
    constructor(private readonly service: CoinService) {}

    @Mutation(() => Coin)
    createCoin(@Args('data') input: CreateCoinInput) {
        return this.service.create(input);
    }

    @Query(() => [Coin], { name: 'coinspage' })
    findAllPage(@Args('listCoinInput') listCoinInput: ListInput) {
        return this.service.getAllPage(listCoinInput);
    }

    @Query(() => [Coin], { name: 'coins' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Coin, { name: 'coin' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Coin)
    updateCoin(@Args('data') input: UpdateCoinInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Coin)
    removeCoin(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}