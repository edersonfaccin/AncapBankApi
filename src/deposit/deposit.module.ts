import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Deposit, DepositSchema } from './schemas/deposit.schema';
import { DepositResolver } from './deposit.resolver';
import { DepositService } from './deposit.service';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Deposit.name, schema: DepositSchema 
    }]),
    AccountModule
  ],
  providers: [
    DepositService,
    DepositResolver
  ]
})
export class DepositModule {}
