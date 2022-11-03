import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
@ObjectType()
export class Transaction {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Account' })
    @Field(() => String, { description: 'Transaction account source' })
    idaccount_source: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Account' })
    @Field(() => String, { description: 'Transaction account target' })
    idaccount_target: Types.ObjectId;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Transaction date register' })
    date_register: Date
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);