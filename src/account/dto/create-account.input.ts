import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {

    @Field(() => String, { description: 'Account user' })
    iduser: string;

    @Field(() => String, { description: 'Account coin' })
    idcoin: string;

    @Field(() => String, { description: 'Account nick' })
    nick: string;

    @Field(() => Number, { description: 'Account agency', nullable: true })
    agency: number;

    @Field(() => Number, { description: 'Account account number', nullable: true })
    account_number: number;

    @Field(() => Number, { description: 'Account balance', nullable: true })
    balance: number;

    @Field(() => Boolean, { description: 'Account active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Account date register', nullable: true })
    date_register?: Date;
}