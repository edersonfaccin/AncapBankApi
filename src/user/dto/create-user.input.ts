import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field(() => String, { description: 'User full name' })
    full_name: string;

    @Field(() => String, { description: 'User email' })
    email: string;

    @Field(() => String, { description: 'User phone' })
    phone: string;

    @Field(() => String, { description: 'User country' })
    country: string;

    @Field(() => String, { description: 'User account password' })
    password_account: string;

    @Field(() => Date, { description: 'User birth date', nullable: true })
    birth_date: Date;

    @Field(() => Date, { description: 'User date register', nullable: true })
    date_register?: Date;
}