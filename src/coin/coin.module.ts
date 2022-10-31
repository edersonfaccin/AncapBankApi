import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Coin, CoinSchema } from './schemas/coin.schema';
import { CoinResolver } from './coin.resolver';
import { CoinService } from './coin.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Coin.name, schema: CoinSchema 
    }])
  ],
  providers: [
    CoinService,
    CoinResolver
  ]
})
export class CoinModule {}
