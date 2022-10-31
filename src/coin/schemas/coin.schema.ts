import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type CoinDocument = Coin & Document;

@Schema()
@ObjectType()
export class Coin {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Coin nick' })
    name: string;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Coin active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Coin date register' })
    date_register: Date
}

export const CoinSchema = SchemaFactory.createForClass(Coin);