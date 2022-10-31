import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/account.schema';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Account.name, schema: AccountSchema 
    }])
  ],
  providers: [
    AccountService,
    AccountResolver
  ]
})
export class AccountModule {}
