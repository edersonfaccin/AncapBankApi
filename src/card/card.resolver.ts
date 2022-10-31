import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateCardInput } from './dto/create-card.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateCardInput } from './dto/update-card.input';
import { Card } from './schemas/card.schema';
import { CardService } from './card.service';

@Resolver(() => Card)
export class CardResolver {
    constructor(private readonly service: CardService) {}

    @Mutation(() => Card)
    createCard(@Args('data') input: CreateCardInput) {
        return this.service.create(input);
    }

    @Query(() => [Card], { name: 'cardspage' })
    findAllPage(@Args('listCardInput') listCardInput: ListInput) {
        return this.service.getAllPage(listCardInput);
    }

    @Query(() => [Card], { name: 'cards' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => Card, { name: 'card' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => Card)
    updateCard(@Args('data') input: UpdateCardInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => Card)
    removeCard(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}