import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
@ObjectType()
export class Card {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    @Field(() => String, { description: 'Card user id' })
    iduser: Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    @Field(() => String, { description: 'Card account id' })
    idaccount: Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Card number card' })
    number_card: string;

    @Prop({ required: true, default: 1 })
    @Field(() => String, { description: 'Card cvv' })
    cvv: string;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Card date expiration' })
    date_expiration: Date

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Card active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Card date register' })
    date_register: Date
}

export const CardSchema = SchemaFactory.createForClass(Card);