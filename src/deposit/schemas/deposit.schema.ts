import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type DepositDocument = Deposit & Document;

@Schema()
@ObjectType()
export class Deposit {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Account' })
    @Field(() => String, { description: 'Deposit account id' })
    idaccount: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Coin' })
    @Field(() => String, { description: 'Deposit coin id' })
    idcoin: Types.ObjectId;

    @Prop({ required: true, default: 0 })
    @Field(() => Number, { description: 'Deposit value' })
    value: number;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Deposit date register' })
    date_register: Date
}

export const DepositSchema = SchemaFactory.createForClass(Deposit);