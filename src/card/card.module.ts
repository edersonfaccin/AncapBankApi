import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './schemas/card.schema';
import { CardResolver } from './card.resolver';
import { CardService } from './card.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Card.name, schema: CardSchema 
    }])
  ],
  providers: [
    CardService,
    CardResolver
  ]
})
export class CardModule {}
