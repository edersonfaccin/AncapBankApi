import { CreateCoinInput } from './create-coin.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCoinInput extends PartialType(CreateCoinInput) {
    @Field(() => String)
    _id: string;
}