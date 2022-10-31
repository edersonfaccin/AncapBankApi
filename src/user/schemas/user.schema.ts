import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Full name user' })
    full_name: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'User email' })
    email: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'User account password' })
    password_account: string;

    @Prop({ required: true, default: new Date(1900, 0, 1) })
    @Field(() => Date, { description: 'User birth date' })
    birth_date: Date

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'User date register' })
    date_register: Date
}

export const UserSchema = SchemaFactory.createForClass(User);