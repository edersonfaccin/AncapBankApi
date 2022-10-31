import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCardInput {

    @Field(() => String, { description: 'Card user' })
    iduser: string;

    @Field(() => String, { description: 'Card account' })
    idaccount: string;

    @Field(() => String, { description: 'Card number', nullable: true })
    number_card: string;

    @Field(() => String, { description: 'Card cvv', nullable: true })
    cvv: string;

    @Field(() => Date, { description: 'Card date expiration', nullable: true })
    date_expiration?: Date;

    @Field(() => Boolean, { description: 'Card active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Card date register', nullable: true })
    date_register?: Date;
}