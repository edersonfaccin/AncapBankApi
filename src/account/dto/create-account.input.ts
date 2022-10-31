import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {

    @Field(() => String, { description: 'Account user' })
    iduser: string;

    @Field(() => String, { description: 'Account nick' })
    nick: string;

    @Field(() => Number, { description: 'Account agency' })
    agency: number;

    @Field(() => Number, { description: 'Account ccount number' })
    account_number: number;

    @Field(() => Boolean, { description: 'Account active' })
    active: boolean;

    @Field(() => Date, { description: 'Account date register', nullable: true })
    date_register?: Date;
}