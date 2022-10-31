import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { ListInput } from '../common/dto/list.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly service: UserService) {}

    @Mutation(() => User)
    createUser(@Args('data') input: CreateUserInput) {
        return this.service.create(input);
    }

    @Query(() => [User], { name: 'userspage' })
    findAllPage(@Args('listUserInput') listUserInput: ListInput) {
        return this.service.getAllPage(listUserInput);
    }

    @Query(() => [User], { name: 'users' })
    findAll() {
        return this.service.getAll();
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.service.getById(id);
    }

    @Mutation(() => User)
    updateUser(@Args('data') input: UpdateUserInput) {
        return this.service.update(input._id, input);
    }

    @Mutation(() => User)
    updatePassword(@Args('data') input: UpdateUserInput) {
        return this.service.updatePassword(input._id, input);
    }

    @Mutation(() => User)
    removeUser(@Args('_id', { type: () => String }) id: string) {
        return this.service.delete(id);
    }
}