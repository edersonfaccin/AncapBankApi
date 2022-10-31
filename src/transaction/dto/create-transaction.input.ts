import { InputType, Field } from '@nestjs/graphql';
import { ETransactionStatus } from 'src/common/utils/Emums';

@InputType()
export class CreateTransactionInput {

    @Field(() => String, { description: 'Transaction source account' })
    idaccount_source: string;

    @Field(() => String, { description: 'Transaction target account' })
    idaccount_target: string;

    @Field(() => ETransactionStatus, { description: 'Transaction status', nullable: true })
    status: ETransactionStatus;

    @Field(() => Date, { description: 'Transaction date register', nullable: true })
    date_register?: Date;
}