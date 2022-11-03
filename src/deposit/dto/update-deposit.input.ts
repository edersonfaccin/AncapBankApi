import { CreateDepositInput } from './create-deposit.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDepositInput extends PartialType(CreateDepositInput) {
    @Field(() => String)
    _id: string;
}