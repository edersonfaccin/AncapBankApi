import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
@ObjectType()
export class Account {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    @Field(() => String, { description: 'Account user id' })
    iduser: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Coin', default: '' })
    @Field(() => String, { description: 'Account coin id' })
    idcoin: Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Account nick' })
    nick: string;

    @Prop({ required: true, default: 1 })
    @Field(() => Number, { description: 'Account agency' })
    agency: number;

    @Prop({ required: true, default: 0, index: true })
    @Field(() => Number, { description: 'Account number' })
    account_number: number;

    @Prop({ required: true, default: 0 })
    @Field(() => Number, { description: 'Account balance' })
    balance: number;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Account active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Account date register' })
    date_register: Date
}

export const AccountSchema = SchemaFactory.createForClass(Account);