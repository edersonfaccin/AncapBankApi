import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCoinInput {

    @Field(() => String, { description: 'Coin name' })
    name: string;

    @Field(() => String, { description: 'Coin initials' })
    initials: string;

    @Field(() => Boolean, { description: 'Coin active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Coin date register', nullable: true })
    date_register?: Date;
}