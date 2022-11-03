import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepositInput {

    @Field(() => String, { description: 'Deposit account' })
    idaccount: string;

    @Field(() => String, { description: 'Deposit coin' })
    idcoin: string;

    @Field(() => Number, { description: 'Deposit value' })
    value: number;

    @Field(() => Date, { description: 'Account date register', nullable: true })
    date_register?: Date;
}