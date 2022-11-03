import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {

    @Field(() => String, { description: 'Transaction source account' })
    idaccount_source: string;

    @Field(() => String, { description: 'Transaction target account' })
    idaccount_target: string;

    @Field(() => Date, { description: 'Transaction date register', nullable: true })
    date_register?: Date;
}